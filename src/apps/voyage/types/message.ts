import { HostMetadata, GuestData } from './index';

export interface MessageBase {
  ts: number;
  id: string;
  // guest -> peerId; host -> ''; system -> ''
  peer: string;
}

// guest 请求 host 的 metadata
export interface MessageUnitLanding {
  type: 'landing';
}

// host 返回 metadata
export interface MessageUnitSetup {
  type: 'setup';
  metadata: HostMetadata;
}

// host 同步所有的 guest
export interface MessageUnitSyncGuests {
  type: 'syncGuests';
  guests: Omit<GuestData, 'isSelf'>[];
}

export interface MessageUnitSystem {
  type: 'system';
  text: string;
}

export interface MessageUnitSimple {
  type: 's';
  text: string;
}

export interface MessageUnitDice {
  type: 'd';
  // 请求参数的字符串，比如 1d20+5
  pkey: string;
  // 最终结果
  res: number;
  // 结果描述
  text?: string;
}

export type MessageUnit =
  | MessageUnitLanding
  | MessageUnitSetup
  | MessageUnitSyncGuests
  | MessageUnitSystem
  | MessageUnitSimple
  | MessageUnitDice;
export type Message = MessageBase & MessageUnit;
