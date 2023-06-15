<script setup lang="ts">
interface Props {}
// const props = withDefaults(defineProps<Props>(), {
//   isChildSkill: false,
//   childSkillName: '',
// });
</script>

<template>
  <input
    type="checkbox"
    class="skill-td-checkbox"
  />
</template>

<style scoped lang="scss">
.skill-td-checkbox {
  --color-line: #8a8a8a;

  flex: 0 0 auto;
  width: 0.9em;
  height: 0.9em;
  font-size: 0.9em;
  line-height: 1;
  border: 1px solid var(--color-line);
  background-color: var(--color-white);
  margin-right: 0.3em;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--color-black);
  }
  &:active {
    background-color: var(--color-background-mute);
  }

  &:checked::before {
    content: '✓';
  }
}
</style>
