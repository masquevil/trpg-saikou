<script setup lang="ts">
import { computed, ref } from 'vue';
import { Refresh } from '@element-plus/icons-vue';

import { initSdAvatars, getSuggestImages } from '../models/sdAvatar';
import { usePC } from '../hooks/useProviders';
import type { SdImageData } from '../types/sdAvatar';

import ActionButton from './ActionButton.vue';
import UploadAvatarButtonWrapper from './UploadAvatarButtonWrapper.vue';
import AvatarInputRow from './AvatarInputRow.vue';

interface Emits {
  (event: 'finished'): void;
}
const emit = defineEmits<Emits>();

const pc = usePC();

initSdAvatars();

const sdImages = ref<SdImageData[]>([]);
const poolSDImageIndex = ref(0);
const showingSDImages = computed(() => {
  return sdImages.value.slice(poolSDImageIndex.value, poolSDImageIndex.value + 6);
});

function onUploaded(url: string) {
  if (!pc) return;
  pc.value.avatar = url;
  pc.value.sdAvatar = '';
  emit('finished');
}
function onSelected(sdImage: SdImageData) {
  if (!pc) return;
  pc.value.sdAvatar = sdImage.name;
  pc.value.avatar = '';
  emit('finished');
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

const matchSource = computed(() => {
  const { gender, age, stories } = pc?.value || {};
  return {
    sex: gender,
    age,
    description: stories?.app,
  };
});
const matchSourcePhrase = computed(() => JSON.stringify(matchSource.value));
const savedMatchSourcePhrase = ref('');
const shouldUpdateMatch = computed(() => {
  return !!sdImages.value.length && savedMatchSourcePhrase.value !== matchSourcePhrase.value;
});
function matchSdImages() {
  savedMatchSourcePhrase.value = matchSourcePhrase.value;
  getSuggestImages(matchSource.value).then((images) => {
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
      <div
        v-if="pc"
        class="avatar-input-rows"
      >
        <div class="refresh-row">
          <div class="refresh-row-inputs">
            <AvatarInputRow
              label="性别"
              placeholder="修改"
              :char="2"
              v-model="pc.gender"
            />
            <AvatarInputRow
              label="年龄"
              placeholder="修改"
              :char="2"
              v-model="pc.age"
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
          v-model="pc.stories.app"
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
