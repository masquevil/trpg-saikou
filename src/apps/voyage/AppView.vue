<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { Peer } from 'peerjs';

import VoyageEntrance from './VoyageEntrance.vue';
import VentureBoard from './VentureBoard.vue';
import PeerHostModel from './models/peer-host';
import PeerGuestModel from './models/peer-guest';
import MessageModal from './models/message';
import { setupPeer } from './utils/peer';
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
let peer: Peer;
let peerHostModel: PeerHostModel;
let peerGuestModel: PeerGuestModel;
const mm = new MessageModal();
const myPeerId = ref('');

function resetVentureData() {
  Object.assign(ventureData, {
    name: '',
    host: { name: '' },
  });
}

function attachMessage(message: Message) {
  messages.value = [message, ...messages.value];
}
function attachMessageUnit(messageUnit: MessageUnit, peerId: string = '') {
  const message: Message = {
    ...mm.getMessageBase(peerId),
    ...messageUnit,
  };
  messages.value = [message, ...messages.value];
  return message;
}
// host method - applyUnit
function applyUnit(messageUnit: MessageUnit, peerId: string = '') {
  const message = attachMessageUnit(messageUnit, peerId);
  peerHostModel.broadcastMessage(message);
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

  peer = setupPeer();
  peerHostModel = new PeerHostModel(peer);
  attachMessageUnit(mm.system(`正在连接到 peer server...`));

  peer.on('open', () => {
    myPeerId.value = peerHostModel.peerId ?? '';
    attachMessageUnit(
      mm.system(`探险号【${venture}】已发出！请复制探险号 ID 发给 PL 们: ${peerHostModel.peerId}`),
    );
  });
  peer.on('close', () => {
    ElMessage.warning(`与 peer server 的尝试连接已中断`);
    resetVentureData();
  });

  peerHostModel.onGuestConnect((guestData: GuestData) => {
    guestDatas.push(guestData);
    applyUnit(mm.system(`${guestData.charName}(${guestData.name}) 登上了甲板`));
  });
  peerHostModel.onGuestMessage((message: MessageUnit, guestData: GuestData) => {
    if (message.type === 'landing') {
      peerHostModel.broadcastMessage({ type: 'setup', metadata: hostMetadata }, [guestData.peerId]);
      peerHostModel.broadcastMessage({ type: 'syncGuests', guests: guestDatas });
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

  peer = setupPeer();
  peerGuestModel = new PeerGuestModel(peer);
  ElMessage.info(`正在连接到 peer server...`);

  peer.on('open', () => {
    myPeerId.value = peerGuestModel.peerId ?? '';
    peerGuestModel.connectToHost(roomId, guestMetadata, {
      onOpen() {
        ElMessage.info('正在尝试连接到探险号，请稍后...');
      },
      onOpened() {
        ElMessage.success('已经建立连接，正在等待同步数据...');
      },
      onError(err) {
        ElMessage.error(`连接失败，错误类型：${err.type}`);
      },
      onTimeout() {
        ElMessage.error('连接超时，请检查后重试');
      },
    });
  });

  peerGuestModel.onHostMessage((message) => {
    if (message.type === 'setup') {
      if (peerGuestModel.hostMetadata) return;
      const { ventureName, hostName, hostAvatar } = message.metadata;
      ventureData.name = ventureName;
      ventureData.host = {
        name: hostName,
        avatar: hostAvatar,
      };
      peerGuestModel.setHostMetadata(message.metadata);
      attachMessageUnit(mm.system(`您已登上探险号【${ventureName}】`));
    } else if (message.type === 'syncGuests') {
      guestDatas.splice(0, guestDatas.length, ...message.guests);
    } else {
      attachMessage(message);
    }
  });
}

function handleMessage(message: string) {
  if (ventureData.host.isSelf) {
    applyUnit(mm.simple(message));
  } else {
    peerGuestModel.sendMessageToHost(mm.simple(message));
  }
}

function handleDice(pkey: string, result: number, text?: string) {
  if (ventureData.host.isSelf) {
    applyUnit(mm.dice(pkey, result, text));
  } else {
    peerGuestModel.sendMessageToHost(mm.dice(pkey, result, text));
  }
}
</script>

<template>
  <main class="container">
    <template v-if="!ventureData.name">
      <h1 class="title">欢迎来到维哲枢纽！</h1>
      <div class="description">
        <p>
          维哲枢纽是一个 p2p 在线跑团工具，类似于早期的魔兽争霸对战平台，pl 会连接到 kp
          主机进行游戏。
        </p>
        <p>目前尚不支持自定义中转服务器，因此请确保彼此处于相近的网络环境。</p>
        <p>
          开发版功能尚不稳定，遇到任何问题可以在
          <a
            target="_blank"
            href="https://github.com/masquevil/trpg-saikou/issues"
          >
            Github Issue
          </a>
          上提问。
        </p>
      </div>
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
.description {
  max-width: fit-content;
  margin: auto;
  margin-bottom: 20px;
}

.data-board {
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 8px;
  white-space: pre;
}
</style>
