import { Peer, PeerError, DataConnection } from 'peerjs';

import type { HostMetadata, GuestMetadata } from '../types';
import type { MessageUnit, Message } from '../types/message';

export default class PeerGuestModel {
  private _peer: Peer;

  private _hostConnection?: DataConnection;
  private _onHostMessageHandlers: ((message: Message) => void)[] = [];

  peerId?: string;
  hostMetadata?: HostMetadata;

  constructor(peer: Peer) {
    this._peer = peer;
    peer.on('open', (id) => {
      this.peerId = id;
    });
  }

  setHostMetadata(metadata: HostMetadata) {
    this.hostMetadata = metadata;
  }

  connectToHost(
    hostId: string,
    metadata: GuestMetadata,
    handlers: {
      onOpen?(): void;
      onOpened?(): void;
      onError?(
        err: PeerError<
          'not-open-yet' | 'message-too-big' | 'negotiation-failed' | 'connection-closed'
        >,
      ): void;
      onTimeout?(): void;
    },
  ) {
    const { onOpen, onOpened, onError, onTimeout } = handlers;
    if (this._hostConnection) return;
    const conn = this._peer.connect(hostId, { metadata });
    this._hostConnection = conn;
    onOpen?.();

    const closeTimeout = setTimeout(() => {
      onTimeout?.();
      conn.close();
      this._hostConnection = undefined;
    }, 20 * 1000);

    conn.on('error', (err) => {
      onError?.(err);
      this._hostConnection = undefined;
      clearTimeout(closeTimeout);
    });
    conn.on('open', () => {
      onOpened?.();
      clearTimeout(closeTimeout);
      let tryTimes = 0;
      const interval = setInterval(() => {
        tryTimes++;
        if (tryTimes === 1) return;
        this.sendMessageToHost({ type: 'landing' });
        // check if host is ready
        if (this.hostMetadata?.ventureName) clearInterval(interval);
        // timeout after 12 seconds
        if (tryTimes > 6) {
          clearInterval(interval);
          onTimeout?.();
          conn.close();
          this._hostConnection = undefined;
        }
      }, 2000);
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
