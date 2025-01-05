<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';

import type { SdImageData } from '@/libs/sdAvatar/type';
import ControlDialog from '@/components/ControlDialog.vue';
import AvatarModal from '@/components/AvatarModal/AvatarModal.vue';

import type { HostForm, GuestForm } from './types';

interface Emits {
  (event: 'setupHost', data: HostForm): void;
  (event: 'setupGuest', data: GuestForm): void;
}
const emit = defineEmits<Emits>();

const isHostModalShown = ref(false);
const isGuestModalShown = ref(false);
const isAvatarModalShown = ref(false);

const hostForm = reactive<HostForm>({
  venture: '',
  name: '',
});
const guestForm = reactive<GuestForm>({
  roomId: '',
  character: '',
  player: '',
});

function handleSetAvatar(dataUrl: string) {
  if (isHostModalShown.value) {
    hostForm.avatar = dataUrl;
  } else if (isGuestModalShown.value) {
    guestForm.avatar = dataUrl;
  }
  isAvatarModalShown.value = false;
}
function handleSetSdAvatar(sdImageData: SdImageData) {
  handleSetAvatar(sdImageData.url);
}

function handleSubmitHost() {
  if (!hostForm.venture || !hostForm.name) {
    ElMessage.error('请填写必要信息！');
    return;
  }
  emit('setupHost', hostForm);
  isHostModalShown.value = false;
}
function handleSubmitGuest() {
  if (!guestForm.roomId || !guestForm.player) {
    ElMessage.error('请填写必要信息！');
    return;
  }
  emit('setupGuest', guestForm);
  isGuestModalShown.value = false;
}
</script>

<template>
  <div class="voyage-entrance">
    <div class="cards">
      <div
        class="card"
        @click="isHostModalShown = true"
      >
        <div class="subtitle">我是 KP</div>
        <div class="title">发出探险号</div>
      </div>
      <div
        class="card"
        @click="isGuestModalShown = true"
      >
        <div class="subtitle">我是 PL</div>
        <div class="title">登上探险号</div>
      </div>
    </div>

    <ControlDialog
      class="voyage-entrance-modal"
      title="发出探险号"
      v-model="isHostModalShown"
    >
      <el-form
        :model="hostForm"
        label-width="auto"
      >
        <el-form-item
          label="探险号名称"
          required
        >
          <el-input v-model="hostForm.venture" />
        </el-form-item>
        <el-form-item
          label="KP 名"
          required
        >
          <el-input v-model="hostForm.name" />
        </el-form-item>
        <el-form-item label="KP 头像">
          <div class="avatar-input">
            <el-button @click="isAvatarModalShown = true">设置头像</el-button>
            <img
              v-if="hostForm.avatar"
              class="avatar-preview"
              :src="hostForm.avatar"
              alt=""
            />
          </div>
        </el-form-item>
        <div class="form-footer">
          <el-button
            type="primary"
            size="large"
            @click="handleSubmitHost"
          >
            出发！
          </el-button>
        </div>
      </el-form>
    </ControlDialog>

    <ControlDialog
      class="voyage-entrance-modal"
      title="登上探险号"
      v-model="isGuestModalShown"
    >
      <el-form
        :model="guestForm"
        label-width="auto"
      >
        <el-form-item
          label="探险号 ID"
          required
        >
          <el-input v-model="guestForm.roomId" />
        </el-form-item>
        <div class="import-row">
          <div class="col-1">
            <el-form-item
              label="玩家名"
              required
            >
              <el-input v-model="guestForm.player" />
            </el-form-item>
            <el-form-item label="PC 名">
              <el-input v-model="guestForm.character" />
            </el-form-item>
            <el-form-item label="PC 头像">
              <div class="avatar-input">
                <el-button @click="isAvatarModalShown = true">设置头像</el-button>
                <img
                  v-if="guestForm.avatar"
                  class="avatar-preview"
                  :src="guestForm.avatar"
                  alt=""
                />
              </div>
            </el-form-item>
          </div>
          <el-form-item>
            <button
              class="import-card"
              disabled
            >
              <div>从角色卡导入</div>
              <div>（开发中）</div>
            </button>
          </el-form-item>
        </div>
        <div class="form-footer">
          <el-button
            type="primary"
            size="large"
            @click="handleSubmitGuest"
          >
            出发！
          </el-button>
        </div>
      </el-form>
    </ControlDialog>

    <AvatarModal
      v-model="isAvatarModalShown"
      @setAvatar="handleSetAvatar"
      @setSdAvatar="handleSetSdAvatar"
    />
  </div>
</template>

<style scoped lang="scss">
.voyage-entrance {
  width: 100%;
}
.cards {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 36px;
}
.card {
  flex: 0 0 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background-color: var(--color-control-bg);
  cursor: pointer;

  &:hover {
    border-color: var(--color-border-hover);
    background-color: var(--color-control-bg-hover);
  }
}
.subtitle {
  font-size: 28px;
  color: #8b8b8b;
}
.title {
  font-size: 40px;
}

.avatar-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.avatar-preview {
  width: 80px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
}

.import-row {
  display: flex;
}
.import-card {
  margin-left: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 12px;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border-color: var(--el-border-color-hover);
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:disabled {
    cursor: not-allowed;
    border-color: var(--el-border-color-hover);
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 0.6;
  }
}

.form-footer {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media screen and (max-width: 390px) {
  .import-row {
    flex-direction: column;
  }
}
</style>

<style lang="scss">
.voyage-entrance-modal {
  max-width: 480px;
}
</style>
