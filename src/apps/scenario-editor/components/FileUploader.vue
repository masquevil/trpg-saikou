<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

interface Emits {
  (e: 'fileUpload', content: string): void
}

const emit = defineEmits<Emits>()

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const handleFileSelect = (files: FileList | null) => {
  if (!files || files.length === 0) return
  
  const file = files[0]
  
  // 验证文件类型
  if (!file.name.endsWith('.md') && !file.name.endsWith('.markdown')) {
    ElMessage.error('请选择 Markdown 文件 (.md 或 .markdown)')
    return
  }
  
  // 验证文件大小 (10MB 限制)
  if (file.size > 10 * 1024 * 1024) {
    ElMessage.error('文件大小不能超过 10MB')
    return
  }
  
  const reader = new FileReader()
  reader.onload = (e) => {
    const content = e.target?.result as string
    emit('fileUpload', content)
    ElMessage.success(`成功加载文件: ${file.name}`)
  }
  
  reader.onerror = () => {
    ElMessage.error('文件读取失败')
  }
  
  reader.readAsText(file, 'UTF-8')
}

const handleClick = () => {
  fileInput.value?.click()
}

const handleDragEnter = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = true
}

const handleDragLeave = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = false
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = false
  
  const files = e.dataTransfer?.files
  if (files) {
    handleFileSelect(files)
  }
}
</script>

<template>
  <div class="file-uploader">
    <input
      ref="fileInput"
      type="file"
      accept=".md,.markdown"
      @change="handleFileSelect($event.target.files)"
      style="display: none"
    />
    
    <div
      class="upload-area"
      :class="{ dragging: isDragging }"
      @click="handleClick"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover="handleDragOver"
      @drop="handleDrop"
    >
      <div class="upload-content">
        <i class="upload-icon">📁</i>
        <span class="upload-text">
          {{ isDragging ? '释放文件以上传' : '点击或拖拽 Markdown 文件到这里' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-uploader {
  display: inline-block;
}

.upload-area {
  padding: 12px 20px;
  border: 2px dashed var(--color-section-border);
  border-radius: 6px;
  background-color: var(--color-section-bg);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-hover-bg);
  }
  
  &.dragging {
    border-color: var(--color-primary);
    background-color: var(--color-primary-light);
    transform: scale(1.02);
  }
}

.upload-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.upload-icon {
  font-size: 20px;
}

.upload-text {
  color: var(--color-text);
  font-size: 14px;
}

@media (max-width: 768px) {
  .upload-area {
    padding: 10px 16px;
  }
  
  .upload-text {
    font-size: 13px;
  }
}
</style>