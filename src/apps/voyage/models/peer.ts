import { Peer, DataConnection } from 'peerjs';

import type { HostMetadata, GuestMetadata, GuestData } from '../types';
import type { MessageUnit, Message } from '../types/message';

export default class PeerModel {
  private _peer?: Peer;
  private _onPeerOpenHandlers: (() => void)[] = [];
  // for host
  private _aliveConnections: DataConnection[] = [];
  private _onGuestConnectHandlers: ((guestMetaData: GuestData) => void)[] = [];
  private _onGuestMessageHandlers: ((message: MessageUnit, guestMetaData: GuestData) => void)[] =
    [];
  // for guests
  private _hostConnection?: DataConnection;
  private _onHostMessageHandlers: ((message: Message) => void)[] = [];

  peerId?: string;
  hostMetadata?: HostMetadata;

  constructor() {}

  init(asHost: boolean) {
    this._peer = new Peer();
    if (asHost) {
      this._initAsHost();
    } else {
      this._initAsGuest();
    }
    this._peer.on('open', (id) => {
      this.peerId = id;
      this._onPeerOpenHandlers.forEach((handler) => handler());
    });
  }
  private _initAsHost() {
    this._peer?.on('connection', (conn) => {
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
  private _initAsGuest() {}

  setHostMetadata(metadata: HostMetadata) {
    this.hostMetadata = metadata;
  }

  /* host actions */
  onPeerOpen(handler: () => void) {
    this._onPeerOpenHandlers.push(handler);
  }

  onGuestConnect(handler: (guestMetaData: GuestData) => void) {
    this._onGuestConnectHandlers.push(handler);
  }

  onGuestMessage(handler: (message: MessageUnit, guestMetaData: GuestData) => void) {
    this._onGuestMessageHandlers.push(handler);
  }

  broadcastMessage(message: MessageUnit, peerIds?: string[]) {
    this._aliveConnections.forEach((conn) => {
      if (peerIds && !peerIds.includes(conn.peer)) return;
      conn.send(message);
    });
  }

  /* guest actions */
  connectToHost(hostId: string, metadata: GuestMetadata) {
    if (this._hostConnection) return;
    const conn = this._peer?.connect(hostId, { metadata });
    if (!conn) return;
    this._hostConnection = conn;
    conn.on('open', () => {
      let tryTimes = 0;
      const interval = setInterval(() => {
        tryTimes++;
        this.sendMessageToHost({ type: 'landing' });
        if (tryTimes > 5 || this.hostMetadata?.ventureName) {
          clearInterval(interval);
        }
      }, 1000);
    });
    conn.on('data', (data) => {
      const message = data as Message;
      this._onHostMessageHandlers.forEach((handler) => handler(message));
    });
  }

  onHostMessage(handler: (message: Message) => void) {
    this._onHostMessageHandlers.push(handler);
  }

  sendMessageToHost(message: MessageUnit) {
    this._hostConnection?.send(message);
  }
}
