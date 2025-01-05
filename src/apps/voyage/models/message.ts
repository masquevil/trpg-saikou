import type {
  MessageBase,
  MessageUnitSystem,
  MessageUnitSimple,
  MessageUnitDice,
} from '../types/message';

class MessageModel {
  private _id: number;

  constructor() {
    this._id = 0;
  }
  private _getId() {
    return (this._id++).toString(36);
  }

  getMessageBase(peerId: string): MessageBase {
    return {
      ts: Date.now(),
      id: this._getId(),
      peer: peerId,
    };
  }
  system(text: string): MessageUnitSystem {
    return {
      type: 'system',
      text,
    };
  }
  simple(text: string): MessageUnitSimple {
    return {
      type: 's',
      text,
    };
  }
  dice(pkey: string, res: number, text?: string): MessageUnitDice {
    return {
      type: 'd',
      pkey,
      res,
      text,
    };
  }
}

export default MessageModel;
