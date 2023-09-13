<script setup lang="ts">
import {
  filetoDataURL,
  urltoImage,
  imagetoCanvas,
  canvastoDataURL,
} from 'image-conversion';
import { getImageSize } from '@/utils/image';

import { usePC, usePageData } from '@/hooks/useCOCCardProviders';

const WIDTH = 132 * 2;
const HEIGHT = 172 * 2;

const pc = usePC();
const pageData = usePageData();

async function handleUpload(event: Event) {
  const el = event.target as any;
  const file: File = el.files[0];
  el.value = null;
  if (!file || !pc) return;

  const url = await filetoDataURL(file);
  let { width, height } = await getImageSize(url);
  if (width > WIDTH) {
    height = (height / width) * WIDTH;
    width = WIDTH;
  }
  if (height > HEIGHT) {
    width = (width / height) * HEIGHT;
    height = HEIGHT;
  }
  const canvas = await imagetoCanvas(await urltoImage(url), {
    width,
    height,
  });
  const resultUrl = await canvastoDataURL(canvas, 0.4);
  pc.value.avatar = resultUrl;
}
</script>

<template>
  <label
    class="avatar-section"
    :class="{
      'printing-image': pageData?.printing,
    }"
    :style="{ 'background-image': pc?.avatar ? `url(${pc.avatar})` : 'none' }"
  >
    <input
      class="input-file"
      type="file"
      accept="image/*"
      @change="handleUpload"
    />
    <div
      class="avatar-placeholder"
      v-if="!pc?.avatar"
    >
      <div>点击上传头像</div>
    </div>
  </label>
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

.input-file {
  display: none;
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
