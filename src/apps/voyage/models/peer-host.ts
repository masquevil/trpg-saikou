import { Peer, DataConnection } from 'peerjs';

import type { GuestMetadata, GuestData } from '../types';
import type { MessageUnit } from '../types/message';

export default class PeerHostModel {
  // private _peer: Peer;

  private _aliveConnections: DataConnection[] = [];
  private _onGuestConnectHandlers: ((guestMetaData: GuestData) => void)[] = [];
  private _onGuestMessageHandlers: ((message: MessageUnit, guestMetaData: GuestData) => void)[] =
    [];

  peerId?: string;

  constructor(peer: Peer) {
    // this._peer = peer;
    peer.on('open', (id) => {
      this.peerId = id;
    });
    peer.on('connection', (conn) => {
      const guestMetadata: GuestMetadata = conn.metadata;
      if (guestMetadata.$sox !== 'voyage') {
        conn.send('You are not allowed to connect to this room.');
        conn.close();
        return;
      }

      const guestData: GuestData = {
        peerId: conn.peer,
        name: guestMetadata.player,
        charName: guestMetadata.character,
        avatar: guestMetadata.avatar,
      };

      this._onGuestConnectHandlers.forEach((handler) => handler(guestData));
      this._aliveConnections.push(conn);

      conn.on('data', (data) => {
        const messageUnit = data as MessageUnit;
        this._onGuestMessageHandlers.forEach((handler) => handler(messageUnit, guestData));
      });
    });
  }

  onGuestConnect(handler: (guestMetaData: GuestData) => void) {
    this._onGuestConnectHandlers.push(handler);
  }

  onGuestMessage(handler: (message: MessageUnit, guestMetaData: GuestData) => void) {
    this._onGuestMessageHandlers.push(handler);
  }

  // 向所有连接的 guest 发送消息
  // 如果提供了 peerIds，则只向这些 guest 发送消息
  broadcastMessage(message: MessageUnit, peerIds?: string[]) {
    this._aliveConnections.forEach((conn) => {
      if (peerIds && !peerIds.includes(conn.peer)) return;
      conn.send(message);
    });
  }
}
