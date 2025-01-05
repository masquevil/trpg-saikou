export interface HostForm {
  venture: string;
  name: string;
  avatar?: string;
}

export interface GuestForm {
  roomId: string;
  character: string;
  player: string;
  avatar?: string;
}

export interface HostMetadata {
  ventureName: string;
  hostName: string;
  hostAvatar?: string;
}

export interface GuestMetadata {
  $sox: 'voyage';
  character: string;
  player: string;
  avatar?: string;
}

export interface HostData {
  name: string;
  avatar?: string;
  isSelf?: boolean;
}

export interface GuestData {
  peerId: string;
  name: string;
  charName: string;
  avatar?: string;
}

export interface VentureData {
  name: string;
  host: HostData;
}
