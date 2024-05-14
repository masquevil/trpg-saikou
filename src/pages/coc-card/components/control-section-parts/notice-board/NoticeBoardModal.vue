<script setup lang="ts">
// import { ref, computed } from 'vue';
// import { ElMessage } from 'element-plus';

// components
import TabsDialog from '../../TabsDialog.vue';

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
  <TabsDialog
    :modelValue="isOpen"
    @update:modelValue="onCloseModal"
  >
    <div class="modal-body">
      <el-tabs
        class="more-container"
        tab-position="right"
        type="card"
      >
        <el-tab-pane
          class="more-pane"
          label="更多功能"
          name="features"
        >
          123
        </el-tab-pane>
        <el-tab-pane
          class="more-pane"
          label="2"
          name="2"
        >
          123
        </el-tab-pane>
      </el-tabs>
    </div>
    223
  </TabsDialog>
</template>

<style scoped lang="scss">
.modal-body {
  display: flex;
  flex-direction: column;
}
</style>
