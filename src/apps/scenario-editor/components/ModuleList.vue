<script setup lang="ts">
interface Module {
  name: string;
  path: string;
}

interface Props {
  modules: Module[];
}

interface Emits {
  (e: 'moduleSelect', path: string): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleModuleClick = (path: string) => {
  emit('moduleSelect', path);
};
</script>

<template>
  <div class="module-list">
    <div
      v-for="module in modules"
      :key="module.name"
      class="module-card"
      @click="handleModuleClick(module.path)"
    >
      <div class="module-card-content">
        <h3 class="module-name">{{ module.name }}</h3>
        <div class="module-preview">
          <i class="preview-icon">📖</i>
          <span class="preview-text">点击查看模组内容</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.module-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 800px;
  width: 100%;
}

.module-card {
  border: 1px solid var(--color-section-border);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-section-bg);
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-color: var(--color-primary);
  }
}

.module-card-content {
  padding: 24px;
  text-align: center;
}

.module-name {
  margin: 0 0 16px;
  font-size: 20px;
  color: var(--color-heading);
  font-weight: 600;
}

.module-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.preview-icon {
  font-size: 32px;
}

.preview-text {
  color: var(--color-text-secondary);
  font-size: 14px;
}

@media (max-width: 768px) {
  .module-list {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .module-card-content {
    padding: 20px;
  }

  .module-name {
    font-size: 18px;
  }
}
</style>
