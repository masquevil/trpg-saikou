<script setup lang="ts">
import { ref, reactive } from 'vue';

import VoyageEntrance from './VoyageEntrance.vue';
import VentureBoard from './VentureBoard.vue';
import PeerModel from './models/peer';
import MessageModal from './models/message';
import type {
  HostForm,
  GuestForm,
  HostMetadata,
  GuestMetadata,
  GuestData,
  VentureData,
} from './types';
import type { MessageUnit, Message } from './types/message';

const ventureData = reactive<VentureData>({
  name: '',
  host: { name: '' },
});
const guestDatas = reactive<GuestData[]>([]);
const messages = ref<Message[]>([]);
const peerModel = new PeerModel();
const mm = new MessageModal();
const myPeerId = ref('');

function applyUnit(messageUnit: MessageUnit, peerId: string = '') {
  const message: Message = {
    ...mm.getMessageBase(peerId),
    ...messageUnit,
  };
  peerModel.broadcastMessage(message);
  attachMessage(message);
}
function attachMessage(message: Message) {
  messages.value = [message, ...messages.value];
}

function handleSetupHost(hostForm: HostForm) {
  const { venture, name, avatar } = hostForm;
  const hostMetadata: HostMetadata = {
    ventureName: venture,
    hostName: name,
    hostAvatar: avatar,
  };
  Object.assign(ventureData, {
    name: venture,
    host: {
      name,
      avatar,
      isSelf: true,
    },
  });

  peerModel.setHostMetadata(hostMetadata);
  peerModel.init(true);
  peerModel.onPeerOpen(() => {
    myPeerId.value = peerModel.peerId ?? '';
    applyUnit(
      mm.system(`探险号【${venture}】已发出！请复制探险号 ID 发给 PL 们: ${peerModel.peerId}`),
    );
  });
  peerModel.onGuestConnect((guestData: GuestData) => {
    guestDatas.push(guestData);
    applyUnit(mm.system(`${guestData.charName}(${guestData.name}) 登上了甲板`));
  });
  peerModel.onGuestMessage((message: MessageUnit, guestData: GuestData) => {
    if (message.type === 'landing') {
      peerModel.broadcastMessage({ type: 'setup', metadata: hostMetadata }, [guestData.peerId]);
      peerModel.broadcastMessage({ type: 'syncGuests', guests: guestDatas });
      return;
    }
    applyUnit(message, guestData.peerId);
  });
}

function handleSetupGuest(guestForm: GuestForm) {
  const { roomId, player, character, avatar } = guestForm;
  ventureData.host.isSelf = false;
  const guestMetadata: GuestMetadata = {
    $sox: 'voyage',
    player,
    character,
    avatar,
  };

  peerModel.init(false);
  peerModel.onPeerOpen(() => {
    myPeerId.value = peerModel.peerId ?? '';
    peerModel.connectToHost(roomId, guestMetadata);
    peerModel.onHostMessage((message) => {
      if (message.type === 'setup') {
        const { ventureName, hostName, hostAvatar } = message.metadata;
        ventureData.name = ventureName;
        ventureData.host = {
          name: hostName,
          avatar: hostAvatar,
        };
        peerModel.setHostMetadata(message.metadata);
        applyUnit(mm.system(`您已登上探险号【${ventureName}】`));
        return;
      } else if (message.type === 'syncGuests') {
        guestDatas.splice(0, guestDatas.length, ...message.guests);
        return;
      }
      attachMessage(message);
    });
  });
}

function handleMessage(message: string) {
  if (ventureData.host.isSelf) {
    applyUnit(mm.simple(message));
  } else {
    peerModel.sendMessageToHost(mm.simple(message));
  }
}

function handleDice(pkey: string, result: number, text?: string) {
  if (ventureData.host.isSelf) {
    applyUnit(mm.dice(pkey, result, text));
  } else {
    peerModel.sendMessageToHost(mm.dice(pkey, result, text));
  }
}
</script>

<template>
  <main class="container">
    <template v-if="!ventureData.name">
      <h1 class="title">欢迎来到维哲枢纽！</h1>
      <VoyageEntrance
        @setupHost="handleSetupHost"
        @setupGuest="handleSetupGuest"
      />
    </template>
    <VentureBoard
      v-else
      :myPeerId="myPeerId"
      :ventureData="ventureData"
      :guestDatas="guestDatas"
      :messages="messages"
      @message="handleMessage"
      @dice="handleDice"
    />
  </main>
</template>

<style scoped lang="scss">
.container {
  margin: auto;
  max-width: 960px;
  padding: 0 20px;
}
.title {
  text-align: center;
  margin: 28px 0 20px;
}

.data-board {
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 8px;
  white-space: pre;
}
</style>
