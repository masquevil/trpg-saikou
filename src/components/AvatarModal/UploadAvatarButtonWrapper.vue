<script setup lang="ts">
import { filetoDataURL, urltoImage, imagetoCanvas, canvastoDataURL } from 'image-conversion';

import { getImageSize } from '@/utils/image';

interface Props {
  id?: string;
}
interface Emits {
  (event: 'uploaded', url: string): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const WIDTH = 132 * 2;
const HEIGHT = 172 * 2;

async function handleUpload(event: Event) {
  const el = event.target as any;
  const file: File = el.files[0];
  el.value = null;
  if (!file) return;

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

  emit('uploaded', resultUrl);
}
</script>

<template>
  <label :for="id">
    <input
      :id="id"
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
