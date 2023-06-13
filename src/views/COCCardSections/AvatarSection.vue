<script setup lang="ts">
import { inject } from 'vue';
import {
  filetoDataURL,
  urltoImage,
  imagetoCanvas,
  canvastoDataURL,
} from 'image-conversion';
import { getImageSize } from '@/utils/image';

// models
import type { COCPlayerCharacter } from '@/models/coc/character';

const WIDTH = 132 * 2;
const HEIGHT = 176 * 2;

const pc = inject<COCPlayerCharacter>('pc');

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
  const resultUrl = await canvastoDataURL(canvas);
  pc!.avatar = resultUrl;
}
</script>

<template>
  <label
    class="avatar-section"
    :style="{ 'background-image': `url(${pc?.avatar})` }"
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
  position: relative;
  width: 10.94em;
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
@media print {
  .avatar-placeholder {
    display: none;
  }
}
</style>
