<script setup lang="ts">
import { computed, ref } from 'vue';

import ControlDialog from '../components/ControlDialog.vue';
import AvatarModalContent from '../components/AvatarModalContent.vue';
import { usePC, usePageData } from '../hooks/useProviders';
import { SdAvatarDomain, SdAvatarOutputPath } from '../constants/sdAvatar';

const pc = usePC();
const pageData = usePageData();

const isModalShown = ref(false);
const avatarUrl = computed(() => {
  const sdUrl = pc?.value.sdAvatar
    ? `${SdAvatarDomain}${SdAvatarOutputPath}/${pc?.value.sdAvatar}.jpg`
    : '';
  return pc?.value.avatar || sdUrl || '';
});
</script>

<template>
  <div
    class="avatar-section"
    :class="{
      'printing-image': pageData?.printing,
    }"
    :style="{ 'background-image': avatarUrl ? `url(${avatarUrl})` : 'none' }"
    @click="isModalShown = true"
  >
    <div
      class="avatar-placeholder"
      v-if="!avatarUrl"
    >
      <div>设置形象</div>
    </div>

    <ControlDialog
      class="coc-card-avatar-modal"
      title="设置形象"
      v-model="isModalShown"
    >
      <AvatarModalContent @finished="isModalShown = false" />
    </ControlDialog>
  </div>
</template>

<style scoped lang="scss">
.avatar-section {
  flex: 1 1 auto;
  position: relative;
  width: 10.94em;
  min-height: 12em;
  border: 1px solid var(--color-black);
  padding: 1em;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--color-white);
  &:hover {
    background-color: var(--color-background-soft);
  }
  &:active {
    background-color: var(--color-background-mute);
  }
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
  color: #777;
}

/* when print image & print */
@mixin printing-styles {
  .avatar-placeholder {
    display: none;
  }
}
.printing-image {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>

<style lang="scss">
.coc-card-avatar-modal {
  /* half of footer control height */
  transform: translateY(-32px);
  max-width: 420px;

  & .el-dialog__body {
    padding-top: 10px;
  }
}
</style>
