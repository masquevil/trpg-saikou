<script setup lang="ts">
interface Props {
  displayedName: string;
  textAvatar: string;
  avatar?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="message-common">
    <div class="card-avatar">
      <img
        v-if="avatar"
        :src="avatar"
        class="avatar-image"
      />
      <div v-else>
        {{ textAvatar }}
      </div>
    </div>
    <div class="message-part">
      <div class="displayed-name">{{ displayedName }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-common {
  display: flex;
  gap: 8px;
}
.card-avatar {
  width: 42px;
  height: 42px;
  font-size: 36px;
}
.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.message-part {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.displayed-name {
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
}
</style>
