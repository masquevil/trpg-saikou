<script setup lang="ts"></script>

<template>
  <div class="issue-row">
    <img
      class="issue-icon"
      src="https://github.githubassets.com/favicons/favicon-dark.png"
    />
    <a
      class="issue-link"
      href="https://github.com/masquevil/trpg-saikou#商业使用"
      target="_blank"
    >
      交流 反馈 商业合作：Github
    </a>
  </div>
</template>

<style scoped lang="scss">
.issue-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  line-height: 1;
  margin-top: 16px;
}
.issue-link {
  color: var(--color-white);
  font-size: 0.9em;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.9;
  }
}
.issue-icon {
  width: 1em;
  height: 1em;
}
</style>
