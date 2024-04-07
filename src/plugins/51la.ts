import { LAEventID, FeatureNames } from '@/constants/coc-card/51la';
export { LAEventID, FeatureNames };

interface ParamsOfFeature {
  name: FeatureNames;
  /**
   * 自动年龄修正是否成功。
   *   条件: MORE_AGE
   */
  success?: boolean;
  /**
   * 保存的文件名，front | back。
   *   条件: CA_SAVE_DOWNLOAD, CA_SAVE_REGEN
   */
  file?: string;
  /**
   * 成功率显示模式，full | simple。
   *   条件: MORE_TOTAL_MODE
   */
  mode?: 'full' | 'simple';
  /**
   * 使用的预设职业
   *   条件: PANE_USE_JOB, PAPER_USE_JOB
   */
  job?: string;
  /**
   * 使用的预设武器
   *   条件: PANE_USE_WEAPON, PAPER_USE_WEAPON
   */
  weapon?: string;
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
