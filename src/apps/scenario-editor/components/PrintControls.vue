<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

interface Props {
  disabled?: boolean
}

interface Emits {
  (e: 'print'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const isPreviewing = ref(false)

const handlePrint = () => {
  emit('print')
  ElMessage.info('正在准备打印...')
}

const handlePreview = () => {
  isPreviewing.value = !isPreviewing.value
  if (isPreviewing.value) {
    ElMessage.info('进入打印预览模式')
  } else {
    ElMessage.info('退出打印预览模式')
  }
}
</script>

<template>
  <div class="print-controls">
    <button
      class="control-button preview-button"
      :class="{ active: isPreviewing }"
      @click="handlePreview"
      :disabled="disabled"
    >
      <span class="button-icon">👁️</span>
      <span class="button-text">{{ isPreviewing ? '退出预览' : '打印预览' }}</span>
    </button>
    
    <button
      class="control-button print-button"
      @click="handlePrint"
      :disabled="disabled"
    >
      <span class="button-icon">🖨️</span>
      <span class="button-text">打印</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.print-controls {
  display: flex;
  gap: 12px;
}

.control-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border: 1px solid var(--color-section-border);
  border-radius: 6px;
  background-color: var(--color-section-bg);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    border-color: var(--color-primary);
    background-color: var(--color-hover-bg);
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.active {
    border-color: var(--color-primary);
    background-color: var(--color-primary-light);
    color: var(--color-primary);
  }
}

.button-icon {
  font-size: 16px;
}

.button-text {
  font-size: 14px;
  font-weight: 500;
}

.print-button {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  
  &:hover:not(:disabled) {
    background-color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
  }
}

@media (max-width: 768px) {
  .print-controls {
    flex-direction: column;
    gap: 8px;
  }
  
  .control-button {
    justify-content: center;
    padding: 12px;
  }
}
</style>