import { LAEventID, FeatureNames } from '@/constants/coc-card/51la';
export { LAEventID, FeatureNames };

interface ParamsOfFeature {
  [key: string]: string | number | boolean;
  name: FeatureNames;
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
      track: (eventID: LAEventID.FEATURE, params: ParamsOfFeature) => void;
    };
  }
}

export default window.LA;
