<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';

// components
import ControlDialog from '../../ControlDialog.vue';
import WritableRow from '../../WritableRow.vue';

// models
import type { ERPAttributesKey, ERPAttributes } from '../../../types/character';
import {
  generateRandomAttributes,
  getAttributesSum,
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

function applyPoints(attributes: ERPAttributes) {
  if (!pc?.value) return;
  Object.entries(attributes).forEach(([key, value]) => {
    pc.value.attributes[key as ERPAttributesKey] = value || undefined;
  });
  onCloseModal();
}

function onCloseModal() {
  emit('close');
  resetStates();
}

// 分配式相关
const actionAllotChoice = ref<ERPAttributes>(withDefaultAttributes({}));
const actionAllotFullList = computed(() => {
  return Object.entries(actionAllotChoice.value)
    .sort((a, b) => {
      return a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1;
    })
    .map(([key, value]) => ({ key, value })) as { key: ERPAttributesKey; value: number }[];
});
const actionAllotDoing = ref<boolean>(false);
const actionAllotGenerateCount = ref(0);
const actionAllotSelectedKeysMap = ref<Partial<Record<ERPAttributesKey, ERPAttributesKey>>>({});
function actionAllotHandler() {
  resetStates();
  actionAllotChoice.value = generateRandomAttributes();
  actionAllotDoing.value = true;
  actionAllotGenerateCount.value++;
  // 统计
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_GEN_KAEDE });
}
function actionAllotApplyHandler() {
  const picked = Object.values(actionAllotSelectedKeysMap.value).filter(
    (pickedKey) => pickedKey,
  ).length;
  if (picked < 8) {
    ElMessage.error('请完成所有选择');
    return;
  }
  const result: ERPAttributes = withDefaultAttributes({});
  Object.entries(actionAllotSelectedKeysMap.value).forEach(([key, pickedKey]) => {
    if (pickedKey) {
      result[key as ERPAttributesKey] = actionAllotChoice.value[pickedKey];
    }
  });
  applyPoints(result);
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_USE_KAEDE });
}
function actionAllotCheckOptionDisabled(optionKey: ERPAttributesKey) {
  return Object.values(actionAllotSelectedKeysMap.value).some(
    (pickedKey) => pickedKey === optionKey,
  );
}

// 天命式相关
const actionRollCount = ref(5);
const actionRollGenerateCount = ref(0);
const actionRollResult = ref<ERPAttributes[]>([]);
function actionRollHandler() {
  resetStates();
  actionRollResult.value = Array.from({ length: actionRollCount.value }, () =>
    generateRandomAttributes(),
  );
  actionRollGenerateCount.value++;
  // 统计
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_GEN_ROLL });
}
function actionRollApplyHandler(result: ERPAttributes) {
  applyPoints(result);
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PM_USE_ROLL });
}

// 购点式相关
const actionBuyTotalPoints = ref(480);
const actionBuyDoing = ref<boolean>(false);
const actionBuyResult = ref<ERPAttributes>(withDefaultAttributes({}));
const actionBuyRemainingPoints = computed(() => {
  return actionBuyTotalPoints.value - getAttributesSum(actionBuyResult.value);
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
  actionAllotDoing.value = false;
  actionRollResult.value = [];
  actionBuyDoing.value = false;
}

interface RenderListItem {
  key: ERPAttributesKey;
  label: string;
  hint: string;
}
const leftList: RenderListItem[] = [
  { key: 'str', label: '力量', hint: 'STR' },
  { key: 'con', label: '体质', hint: 'CON' },
  { key: 'dex', label: '敏捷', hint: 'DEX' },
  { key: 'cre', label: '资本', hint: 'CRE' },
];
const rightList: RenderListItem[] = [
  { key: 'app', label: '外貌', hint: 'APP' },
  { key: 'pow', label: '意志', hint: 'POW' },
  { key: 'int', label: '智力', hint: '灵感 INT' },
  { key: 'luc', label: '幸运', hint: 'LUC' },
];
const fullList: RenderListItem[] = [...leftList, ...rightList];
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
          <div class="method-section-title">分配式</div>
          <div class="header-action">
            <el-button
              size="small"
              type="default"
              @click="actionAllotHandler"
            >
              生成
              <template v-if="actionAllotGenerateCount">
                (已生成 {{ actionAllotGenerateCount }} 次)
              </template>
            </el-button>
            <span
              class="header-hint"
              v-if="actionAllotDoing"
            >
              总点数 {{ getAttributesSum(actionAllotChoice) }}
            </span>
          </div>
        </div>
        <div class="method-section-content">
          <div class="kaede-desc-row">
            <div class="kaede-desc-col">
              分配 8 组 4D6k3
              <span
                v-if="actionAllotDoing"
                class="kaede-value-column"
              >
                ·
                <span
                  v-for="{ key, value } in actionAllotFullList"
                  :key="key"
                >
                  {{ value }}
                </span>
              </span>
            </div>
          </div>
          <div
            class="column-section-content"
            v-if="actionAllotDoing"
          >
            <div class="column-section-content-column">
              <div
                v-for="config in leftList"
                :key="config.key"
                class="kaede-choice-row"
              >
                <div class="kaede-choice-row-label">{{ config.label }}</div>
                <el-select
                  v-model="actionAllotSelectedKeysMap[config.key]"
                  placeholder="请选择"
                  size="small"
                  clearable
                >
                  <el-option
                    v-for="optionConfig in actionAllotFullList"
                    :key="optionConfig.key"
                    :label="optionConfig.value"
                    :value="optionConfig.key"
                    :disabled="actionAllotCheckOptionDisabled(optionConfig.key)"
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
                  v-model="actionAllotSelectedKeysMap[config.key]"
                  placeholder="请选择"
                  size="small"
                  clearable
                >
                  <el-option
                    v-for="optionConfig in actionAllotFullList"
                    :key="optionConfig.key"
                    :label="optionConfig.value"
                    :value="optionConfig.key"
                    :disabled="actionAllotCheckOptionDisabled(optionConfig.key)"
                  />
                </el-select>
              </div>
              <div class="column-section-content-column-actions">
                <el-button
                  size="small"
                  type="default"
                  @click="actionAllotApplyHandler"
                >
                  应用
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
            @click="actionRollApplyHandler(result)"
          >
            <div
              v-for="config in fullList"
              :key="config.key"
              class="action-roll-result-item"
            >
              {{ config.label }} {{ result[config.key] }}
            </div>
            <div class="action-roll-result-item action-roll-result-item-sum">
              总点数 {{ getAttributesSum(result) }}
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
.header-hint {
  margin-left: 0.4em;
  font-size: 0.88em;
  opacity: 0.8;
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

/* 分配式相关 */
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
