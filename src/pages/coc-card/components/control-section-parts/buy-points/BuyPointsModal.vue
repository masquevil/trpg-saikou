<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';

// components
import ControlDialog from '../../ControlDialog.vue';
import WritableRow from '../../WritableRow.vue';

// models
import type { COCAttributesKey, COCAttributes } from '../../../types/character';
import {
  generateRandomAttributes,
  getAttributesSum,
  getLuckAttributesSum,
  withDefaultAttributes,
} from '../../../models/attribute';
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

import { usePC } from '../../../hooks/useProviders';

interface Props {
  isOpen?: boolean;
}
defineProps<Props>();

interface Emits {
  (event: 'close'): void;
}
const emit = defineEmits<Emits>();

const pc = usePC();

function applyPoints(attributes: COCAttributes) {
  if (!pc?.value) return;
  Object.entries(attributes).forEach(([key, value]) => {
    pc.value.attributes[key as COCAttributesKey] = value || undefined;
  });
  onCloseModal();
}

function onCloseModal() {
  emit('close');
  resetStates();
}

// 枫笛式相关
const actionKeadeChoice = ref<COCAttributes>(withDefaultAttributes({}));
const actionKeadeDoing = ref<boolean>(false);
const actionKeadeGenerateCount = ref(0);
const actionKeadeSelectedKeysMap = ref<Partial<Record<COCAttributesKey, COCAttributesKey>>>({});
function actionKeadeHandler() {
  resetStates();
  actionKeadeChoice.value = generateRandomAttributes();
  actionKeadeSelectedKeysMap.value.luc = 'luc';
  actionKeadeDoing.value = true;
  actionKeadeGenerateCount.value++;
  // 统计
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_GEN_KAEDE });
}
function actionKeadeApplyHandler() {
  const picked = Object.values(actionKeadeSelectedKeysMap.value).filter(
    (pickedKey) => pickedKey,
  ).length;
  if (picked < 9) {
    ElMessage.error('请完成所有选择');
    return;
  }
  const result: COCAttributes = withDefaultAttributes({});
  Object.entries(actionKeadeSelectedKeysMap.value).forEach(([key, pickedKey]) => {
    if (pickedKey) {
      result[key as COCAttributesKey] = actionKeadeChoice.value[pickedKey];
    }
  });
  applyPoints(result);
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_USE_KAEDE });
}
function actionKeadeCheckOptionDisabled(optionKey: COCAttributesKey) {
  return Object.values(actionKeadeSelectedKeysMap.value).some(
    (pickedKey) => pickedKey === optionKey,
  );
}

// 天命式相关
const actionRollCount = ref(5);
const actionRollGenerateCount = ref(0);
const actionRollResult = ref<COCAttributes[]>([]);
function actionRollHandler() {
  resetStates();
  actionRollResult.value = Array.from({ length: actionRollCount.value }, () =>
    generateRandomAttributes(),
  );
  actionRollGenerateCount.value++;
  // 统计
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_GEN_ROLL });
}
function actionRollApplyHandler(result: COCAttributes) {
  applyPoints(result);
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_USE_ROLL });
}

// 购点式相关
const actionBuyTotalPoints = ref(460);
const actionBuyDoing = ref<boolean>(false);
const actionBuyResult = ref<COCAttributes>(withDefaultAttributes({}));
const actionBuyRemainingPoints = computed(() => {
  return actionBuyTotalPoints.value - getLuckAttributesSum(actionBuyResult.value);
});
function actionBuyHandler() {
  resetStates();
  actionBuyDoing.value = true;
  actionBuyResult.value = withDefaultAttributes({});
  // 统计
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_GEN_BUY });
}
function actionBuyApplyHandler() {
  applyPoints(actionBuyResult.value);
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_USE_BUY });
}

// shared
function resetStates() {
  actionKeadeDoing.value = false;
  actionRollResult.value = [];
  actionBuyDoing.value = false;
}

interface RenderListItem {
  key: COCAttributesKey;
  label: string;
  hint: string;
}
const leftList: RenderListItem[] = [
  { key: 'str', label: '力量', hint: 'STR' },
  { key: 'con', label: '体质', hint: 'CON' },
  { key: 'dex', label: '敏捷', hint: 'DEX' },
  { key: 'app', label: '外貌', hint: 'APP' },
  { key: 'pow', label: '意志', hint: 'POW' },
];
const rightList: RenderListItem[] = [
  { key: 'siz', label: '体型', hint: 'SIZ' },
  { key: 'edu', label: '教育', hint: '知识 EDU' },
  { key: 'int', label: '智力', hint: '灵感 INT' },
];
const hiddenList: RenderListItem[] = [{ key: 'luc', label: '幸运', hint: 'Luck' }];
</script>

<template>
  <ControlDialog
    title="花式加点"
    :modelValue="isOpen"
    @update:modelValue="onCloseModal"
  >
    <div class="modal-body">
      <div class="method-section">
        <div class="method-section-header">
          <div class="method-section-title">枫笛式</div>
          <div class="header-action">
            <el-button
              size="small"
              type="default"
              @click="actionKeadeHandler"
            >
              生成
              <template v-if="actionKeadeGenerateCount">
                (已生成 {{ actionKeadeGenerateCount }} 次)
              </template>
            </el-button>
          </div>
        </div>
        <div class="method-section-content">
          <div class="kaede-desc-row">
            <div class="kaede-desc-col">
              分配 5组 3D6×5 到左侧
              <span
                v-if="actionKeadeDoing"
                class="kaede-value-column"
              >
                ·
                <span
                  v-for="config in leftList"
                  :key="config.key"
                >
                  {{ actionKeadeChoice[config.key] }}
                </span>
              </span>
            </div>
            <div class="kaede-desc-col">
              分配 3组 (2D6+6)×5 到右侧
              <span
                v-if="actionKeadeDoing"
                class="kaede-value-column"
              >
                ·
                <span
                  v-for="config in rightList"
                  :key="config.key"
                >
                  {{ actionKeadeChoice[config.key] }}
                </span>
              </span>
            </div>
          </div>
          <div
            class="column-section-content"
            v-if="actionKeadeDoing"
          >
            <div class="column-section-content-column">
              <div
                v-for="config in leftList"
                :key="config.key"
                class="kaede-choice-row"
              >
                <div class="kaede-choice-row-label">{{ config.label }}</div>
                <el-select
                  v-model="actionKeadeSelectedKeysMap[config.key]"
                  placeholder="请选择"
                  size="small"
                  clearable
                >
                  <el-option
                    v-for="optionConfig in leftList"
                    :key="optionConfig.key"
                    :label="actionKeadeChoice[optionConfig.key]"
                    :value="optionConfig.key"
                    :disabled="actionKeadeCheckOptionDisabled(optionConfig.key)"
                  />
                </el-select>
              </div>
            </div>
            <div class="column-section-content-column">
              <div
                v-for="config in rightList"
                :key="config.key"
                class="kaede-choice-row"
              >
                <div class="kaede-choice-row-label">{{ config.label }}</div>
                <el-select
                  v-model="actionKeadeSelectedKeysMap[config.key]"
                  placeholder="请选择"
                  size="small"
                  clearable
                >
                  <el-option
                    v-for="optionConfig in rightList"
                    :key="optionConfig.key"
                    :label="actionKeadeChoice[optionConfig.key]"
                    :value="optionConfig.key"
                    :disabled="actionKeadeCheckOptionDisabled(optionConfig.key)"
                  />
                </el-select>
              </div>
              <div>
                <span>总点数 {{ getAttributesSum(actionKeadeChoice) }}</span>
                <span>({{ getLuckAttributesSum(actionKeadeChoice) }})</span>
              </div>
              <div class="column-section-content-column-actions">
                <el-button
                  size="small"
                  type="default"
                  @click="actionKeadeApplyHandler"
                >
                  应用 (幸运 {{ actionKeadeChoice.luc }})
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="method-section">
        <div class="method-section-header">
          <div class="method-section-title">天命式</div>
          <div class="header-action">
            <div class="header-action-label">组数</div>
            <el-input
              size="small"
              type="number"
              :min="1"
              :max="10"
              v-model="actionRollCount"
            />
            <el-button
              size="small"
              type="default"
              @click="actionRollHandler"
            >
              生成
              <template v-if="actionRollGenerateCount">
                (已生成 {{ actionRollGenerateCount }} 次)
              </template>
            </el-button>
          </div>
        </div>
        <div class="method-section-content">
          <div>点击“生成”后，点击数据组卡片使用</div>
          <div
            v-for="(result, _i) in actionRollResult"
            :key="_i"
            class="action-roll-result"
          >
            <div
              v-for="config in [...leftList, ...rightList, ...hiddenList]"
              :key="config.key"
              class="action-roll-result-item"
              @click="actionRollApplyHandler(result)"
            >
              {{ config.label }} {{ result[config.key] }}
            </div>
            <div class="action-roll-result-item action-roll-result-item-sum">
              总点数 {{ getAttributesSum(result) }} / 含运
              {{ getLuckAttributesSum(result) }}
            </div>
          </div>
        </div>
      </div>

      <div class="method-section">
        <div class="method-section-header">
          <div class="method-section-title">购点式</div>
          <div class="header-action">
            <div class="header-action-label">总点数</div>
            <el-input
              size="small"
              type="number"
              :min="0"
              :max="720"
              v-model="actionBuyTotalPoints"
            />
            <el-button
              size="small"
              type="default"
              @click="actionBuyHandler"
            >
              购点
              <template v-if="actionBuyDoing"> (剩余 {{ actionBuyRemainingPoints }}) </template>
            </el-button>
          </div>
        </div>
        <div class="method-section-content">
          <div>点击“购点”，填写，点击“应用”</div>
          <div
            class="column-section-content"
            v-if="actionBuyDoing"
          >
            <div class="column-section-content-column">
              <WritableRow
                v-for="item in leftList"
                :key="item.key"
                :label="item.label"
                :hint="item.hint"
                :modelValue="`${actionBuyResult[item.key] ?? ''}`"
                @update:modelValue="(newValue) => (actionBuyResult[item.key] = Number(newValue))"
              />
            </div>
            <div class="column-section-content-column">
              <WritableRow
                v-for="item in rightList"
                :key="item.key"
                :label="item.label"
                :hint="item.hint"
                :modelValue="`${actionBuyResult[item.key] ?? ''}`"
                @update:modelValue="(newValue) => (actionBuyResult[item.key] = Number(newValue))"
              />
              <WritableRow
                v-for="item in hiddenList"
                :key="item.key"
                :label="item.label"
                :hint="item.hint"
                :modelValue="`${actionBuyResult[item.key] || ''}`"
                placeholder="不含运请忽略"
                @update:modelValue="(newValue) => (actionBuyResult[item.key] = Number(newValue))"
              />
              <div class="column-section-content-column-actions">
                <el-button
                  size="small"
                  type="default"
                  @click="actionBuyApplyHandler"
                >
                  应用
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ControlDialog>
</template>

<style scoped lang="scss">
.modal-body {
  display: flex;
  flex-direction: column;
}
.method-section {
  padding: 1em 0;
  & + & {
    border-top: 1px solid var(--color-border);
  }
}
.method-section-header {
  display: flex;
  align-items: center;
  gap: 1.4em;
}
.method-section-title {
  font-weight: bold;
}
.method-section-content {
  margin-top: 0.5em;
}
.header-action {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.header-action-label {
  flex: 0 0 auto;
}

/* 通用双列布局 */
.column-section-content {
  display: flex;
  gap: 1.6em;
  margin-top: 0.6em;
}
.column-section-content-column {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.column-section-content-column-actions {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 10%;
}

/* 枫笛式相关 */
.kaede-desc-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0 1.4em;
}
.kaede-desc-col {
  flex: 1 0 auto;
}
.kaede-value-column {
  margin-left: 0.4em;
  display: inline-flex;
  gap: 0.4em;
  font-size: 0.88em;
  opacity: 0.8;
}
.kaede-choice-row {
  display: flex;
  align-items: center;
  gap: 0.4em;
}
.kaede-choice-row-label {
  flex: 0 0 auto;
}

/* 天命式相关 */
.action-roll-result {
  margin-top: 0.6em;
  border: 1px solid var(--color-border);
  padding: 0.6em 0.8em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em 0.6em;
  font-size: 0.88em;
  line-height: 1;
  cursor: pointer;
  font-family: monospace;
  letter-spacing: -0.06em;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
.action-roll-result-item {
  flex: 0 0 auto;
}
.action-roll-result-item-sum {
  flex: 1 0 auto;
  text-align: right;
}

/* 购点式相关 */
</style>
