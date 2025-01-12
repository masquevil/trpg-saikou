import { ParamsOfFeature } from './id_feature';
import { ParamsOfVoyage } from './id_voyage';

export enum LAEventID {
  // coc-card 使用的功能
  FEATURE = 'feature',
  // voyage 使用的功能
  VOYAGE = 'voyage',
}

declare global {
  interface Window {
    LA: {
      /**
       * @param eventID enum of string
       * @param params total 20 key-value pairs
       *   key less than 25 characters
       *   value less than 64 characters
       * @returns
       */
      track: {
        (eventID: LAEventID.FEATURE, params: ParamsOfFeature): void;
        (eventID: LAEventID.VOYAGE, params: ParamsOfVoyage): void;
      }
    };
  }
}
