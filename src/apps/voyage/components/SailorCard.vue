<script setup lang="ts">
interface Props {
  name: string;
  displayedName: string;
  charName?: string;
  avatar?: string;
  textAvatar: string;
}
defineProps<Props>();
</script>

<template>
  <div class="sailor-card">
    <div class="sailor-card-avatar">
      <img
        v-if="avatar"
        :src="avatar"
        class="avatar-image"
      />
      <div
        v-else
        class="avatar-text"
      >
        {{ textAvatar }}
      </div>
    </div>
    <div class="sailar-card-label">{{ displayedName }}</div>
  </div>
</template>

<style scoped lang="scss">
.sailor-card {
  flex: 0 0 auto;
  width: 100px;
  height: 120px;
  position: relative;
  border: 2px solid var(--color-border);
  background-color: var(--color-black);
}
.sailor-card-avatar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
}
.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.avatar-text {
  margin-bottom: 16px;
}

.sailar-card-label {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.66);
}
</style>
