<script setup lang="ts">
import {
  filetoDataURL,
  urltoImage,
  imagetoCanvas,
  canvastoDataURL,
} from 'image-conversion';

import { getImageSize } from '@/utils/image';
import { usePC } from '@/hooks/useCOCCardProviders';

interface Emits {
  (event: 'uploaded', url: string): void;
}
const emit = defineEmits<Emits>();

const WIDTH = 132 * 2;
const HEIGHT = 172 * 2;

const pc = usePC();

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
  // pc.value.avatar = resultUrl;

  emit('uploaded', resultUrl);
}
</script>

<template>
  <label>
    <input
      class="input-file"
      type="file"
      accept="image/*"
      @change="handleUpload"
    />
    <slot></slot>
  </label>
</template>

<style scoped lang="scss">
.input-file {
  display: none;
}
</style>
