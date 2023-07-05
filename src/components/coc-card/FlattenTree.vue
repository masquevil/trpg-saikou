<script setup lang="ts">
import type {
  FlattenTreeData,
  FlattenTreeDataItem as Item,
} from '@/types/coc-card/flattenTree';
interface Props {
  tree: FlattenTreeData;
}
defineProps<Props>();

interface Emits {
  (event: 'select', item: Item, group: Item & { children: Item[] }): void;
}
defineEmits<Emits>();
</script>

<template>
  <div class="flatten-tree">
    <div
      class="group"
      v-for="group in tree"
      :key="group.key"
    >
      <div class="group-label">{{ group.label }}</div>
      <div class="options">
        <a
          class="option"
          v-for="child in group.children"
          :key="child.key"
          @click="$emit('select', child, group)"
        >
          {{ child.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flatten-tree {
  display: flex;
  flex-direction: column;
  gap: 0.6em;

  --color-group-label: #999;
}

.group {
  display: flex;
  align-items: flex-start;
  gap: 0.4em;
  padding-bottom: 0.6em;
  border-bottom: 1px dashed var(--color-border);

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }
}

.group-label {
  flex: 0 0 5.2em;
  color: var(--color-group-label);
  font-size: 0.96em;
  line-height: 1.8em;
  text-align: right;
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em 0.5em;
}

.option {
  line-height: 1;
  padding: 0.4em 0.6em;
  border-radius: 0.4em;
  background-color: rgba(0, 0, 0, 0.04);
  cursor: pointer;
  color: var(--color-black);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
