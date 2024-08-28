<script setup lang="ts">
// components
import ControlDialog from '../../ControlDialog.vue';
import RollTool from '../../../../roll/RollTool.vue';

interface Props {
  isOpen?: boolean;
}
defineProps<Props>();

interface Emits {
  (event: 'close'): void;
}
const emit = defineEmits<Emits>();

function onCloseModal() {
  emit('close');
}
</script>

<template>
  <ControlDialog
    title="简易骰子"
    :modelValue="isOpen"
    @update:modelValue="onCloseModal"
  >
    <div class="modal-body">
      <RollTool hideDiy />
      <div>
        更丰富的骰子请访问：
        <router-link :to="{ name: 'roll' }"> 骰子工具 </router-link>
      </div>
    </div>
  </ControlDialog>
</template>

<style scoped lang="scss">
.modal-body {
  min-height: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
