<script setup lang="ts">
import { computed } from 'vue';

import LA, { LAEventID, VoyageEventNames } from '@/plugins/51la';

import MessageCard from './components/MessageCard.vue';
import SailorCard from './components/SailorCard.vue';
import VentureActionSection from './components/VentureActionSection.vue';
import type { GuestData, VentureData } from './types';
import type { Message } from './types/message';

interface FormattedSailer {
  peerId?: string;
  name: string;
  charName: string;
  displayedName: string;
  avatar?: string;
  textAvatar: string;
  isSelf?: boolean;
}

const defaultHostCharName = 'KP';

interface Props {
  myPeerId: string;
  ventureData: VentureData;
  guestDatas: GuestData[];
  messages: Message[];
}
const props = defineProps<Props>();

interface Emits {
  (event: 'message', message: string): void;
  (event: 'dice', pkey: string, result: number, text?: string): void;
}
const emit = defineEmits<Emits>();

const formattedHost = computed<FormattedSailer>(() => {
  const host = props.ventureData.host;
  const name = host.name;
  const charName = defaultHostCharName;
  const isNameTooLong = name.charCodeAt(0) > 255 || name.charCodeAt(1) > 255;
  const textAvatar = isNameTooLong ? name.slice(0, 1) : name.slice(0, 2);
  return {
    name,
    charName,
    avatar: host.avatar,
    textAvatar,
    displayedName: charName ? `${charName}(${name})` : name,
    isSelf: host.isSelf,
  };
});
const formattedGuests = computed<FormattedSailer[]>(() => {
  return props.guestDatas.map((guestData) => {
    const name = guestData.charName;
    const isNameTooLong = name.charCodeAt(0) > 255 || name.charCodeAt(1) > 255;
    const textAvatar = isNameTooLong ? name.slice(0, 1) : name.slice(0, 2);
    return {
      ...guestData,
      textAvatar,
      displayedName: name ? `${name}(${guestData.name})` : guestData.name,
      isSelf: guestData.peerId === props.myPeerId,
    };
  });
});
const guestMap = computed(() => {
  return formattedGuests.value.reduce(
    (acc, formattedGuest) => {
      acc[formattedGuest.peerId!] = formattedGuest;
      return acc;
    },
    {} as Record<string, FormattedSailer>,
  );
});

function sendMessage(message: string) {
  emit('message', message);
  LA?.track(LAEventID.VOYAGE, { voya: VoyageEventNames.V_MES });
}
function sendDice(pkey: string, result: number, text?: string) {
  // TODO: PL 的投掷应该发送请求给 KP，在 KP 的客户端进行投掷
  emit('dice', pkey, result, text);
  LA?.track(LAEventID.VOYAGE, { voya: VoyageEventNames.V_ROLL });
}
</script>

<template>
  <div class="venture-board">
    <div class="board-section">
      <div class="message-board">
        <MessageCard
          v-for="message in messages"
          :key="message.id"
          :sailer="message.peer ? guestMap[message.peer]! : formattedHost"
          :message="message"
        />
      </div>
      <div class="sailor-board">
        <SailorCard
          v-bind="formattedHost"
          :style="{ 'z-index': guestDatas.length }"
        />
        <SailorCard
          v-for="(guestData, index) in formattedGuests"
          :key="guestData.peerId"
          v-bind="guestData"
          :style="{ 'z-index': guestDatas.length - index - 1 }"
        />
      </div>
    </div>
    <VentureActionSection
      class="action-section"
      @message="sendMessage"
      @dice="sendDice"
    />
  </div>
</template>

<style scoped lang="scss">
.venture-board {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  --color-border: #3c3c3c;
  --color-border-hover: #424242;
  --color-bg: #1e1e1e;
}
.board-section {
  flex: 1 1 auto;
  width: 100%;
  margin-top: 24px;
  display: flex;
  overflow: hidden;
}
.action-section {
  flex: 0 0 auto;
  margin: 16px 0 24px;
}

.message-board {
  flex: 1 1 auto;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  overflow: auto;
  padding: 8px 12px;
}

.sailor-board {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: auto;
  padding: 4px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  margin: 0 0 0 -1px;
  border-left-width: 0;
}

@media screen and (max-width: 390px) {
  .board-section {
    flex-direction: column;
  }
  .sailor-board {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: -1px 0 0 0;
    border-left-width: 1px;
    border-top: none;
  }
}
</style>
