<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
import { Refresh } from '@element-plus/icons-vue';

import ControlDialog from '../ControlDialog.vue';

import { initSdAvatars, getSuggestImages } from '@/libs/sdAvatar';
import type { SdImageData } from '@/libs/sdAvatar/type';

import ActionButton from './ActionButton.vue';
import UploadAvatarButtonWrapper from './UploadAvatarButtonWrapper.vue';
import AvatarInputRow from './AvatarInputRow.vue';

interface Props {
  title?: string;
  modelValue?: boolean;
  initialMatcher?: {
    sex?: string;
    age?: string;
    description?: string;
  };
}
const props = defineProps<Props>();

interface Emits {
  (event: 'setAvatar', value: string): void;
  (event: 'setSdAvatar', value: SdImageData): void;
  (event: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<Emits>();

initSdAvatars();

const sdImages = ref<SdImageData[]>([]);
const poolSDImageIndex = ref(0);
const showingSDImages = computed(() => {
  return sdImages.value.slice(poolSDImageIndex.value, poolSDImageIndex.value + 6);
});

function onUploaded(url: string) {
  emit('setAvatar', url);
  emit('update:modelValue', false);
}
function onSelected(sdImage: SdImageData) {
  emit('setSdAvatar', sdImage);
  emit('update:modelValue', false);
}

const refreshWaitTime = ref(0);
function setWaiter() {
  refreshWaitTime.value = 3;
  const timer = setInterval(() => {
    refreshWaitTime.value--;
    if (refreshWaitTime.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

const matchSource = reactive({
  sex: props.initialMatcher?.sex ?? '',
  age: props.initialMatcher?.age ?? '',
  description: props.initialMatcher?.description ?? '',
});
const matchSourcePhrase = computed(() => JSON.stringify(matchSource));
const savedMatchSourcePhrase = ref('');
const shouldUpdateMatch = computed(() => {
  return !!sdImages.value.length && savedMatchSourcePhrase.value !== matchSourcePhrase.value;
});
function matchSdImages() {
  savedMatchSourcePhrase.value = matchSourcePhrase.value;
  getSuggestImages(matchSource).then((images) => {
    sdImages.value = images;
    poolSDImageIndex.value = 0;
  });
  setWaiter();
}

function refreshSDImages() {
  poolSDImageIndex.value += 6;
  if (poolSDImageIndex.value >= sdImages.value.length) {
    poolSDImageIndex.value = 0;
  }
  setWaiter();
}
</script>

<template>
  <ControlDialog
    class="avatar-modal"
    :title="title ?? '设置形象'"
    :modelValue="modelValue"
    @update:modelValue="(value: boolean) => $emit('update:modelValue', value)"
  >
    <div class="avatar-modal-content">
      <div class="action-buttons">
        <UploadAvatarButtonWrapper @uploaded="onUploaded">
          <ActionButton
            tag="div"
            fullWidth
          >
            上传形象
          </ActionButton>
        </UploadAvatarButtonWrapper>
        <ActionButton
          fullWidth
          @click="matchSdImages"
          :disabled="refreshWaitTime > 0"
        >
          <template v-if="refreshWaitTime">
            {{ `${refreshWaitTime} ……` }}
          </template>
          <template v-else>
            {{ shouldUpdateMatch ? '形象描述已更新，重新匹配' : '匹配形象' }}
          </template>
        </ActionButton>
      </div>
      <div v-if="sdImages.length">
        <div class="avatar-input-rows">
          <div class="refresh-row">
            <div class="refresh-row-inputs">
              <AvatarInputRow
                label="性别"
                placeholder="修改"
                :char="2"
                v-model="matchSource.sex"
              />
              <AvatarInputRow
                label="年龄"
                placeholder="修改"
                :char="2"
                v-model="matchSource.age"
              />
            </div>
            <button
              v-if="!shouldUpdateMatch && sdImages.length > poolSDImageIndex"
              class="refresh-button"
              @click="refreshSDImages"
              :disabled="refreshWaitTime > 0"
            >
              <el-icon><Refresh /></el-icon>
              {{ refreshWaitTime ? `${refreshWaitTime} ……` : '换一批' }}
            </button>
          </div>
          <AvatarInputRow
            label="形象描述"
            placeholder="示例：红发 马尾 黑色眼睛"
            v-model="matchSource.description"
          />
          <div class="avatar-input-rows-hint">* 目前预设形象库中只有年轻女性</div>
        </div>
        <div class="sd-avatars">
          <div
            v-for="sdImage in showingSDImages"
            :key="sdImage.name"
            class="sd-avatar-container"
            @click="onSelected(sdImage)"
          >
            <img
              class="sd-avatar"
              :src="sdImage.url"
            />
          </div>
        </div>
      </div>
    </div>
  </ControlDialog>
</template>

<style scoped lang="scss">
.avatar-modal-content {
  color: var(--color-text);
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}

.avatar-input-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.avatar-input-rows-hint {
  margin-top: 2px;
  font-size: 12px;
  opacity: 0.6;
}
.refresh-row {
  display: flex;
  justify-content: space-between;
}
.refresh-row-inputs {
  display: flex;
  gap: 8px;
}
.refresh-button {
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1;
  cursor: pointer;
  color: var(--color-white);
  background-color: transparent;
  &:hover {
    color: var(--color-text);
  }
  &:disabled {
    cursor: not-allowed;
    color: #888;
  }
}

.sd-avatars {
  margin: 8px 0 -8px;
  display: flex;
  gap: 16px 8px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.sd-avatar-container {
  width: 108px;
  height: 144px;
  cursor: pointer;
}
.sd-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style lang="scss">
.avatar-modal {
  /* half of footer control height */
  /* transform: translateY(-32px); */
  max-width: 420px;

  & .el-dialog__body {
    padding-top: 10px;
  }
}
</style>
