export enum LAEventID {
  FEATURE = 'feature',
}

export enum FeatureNames {
  // footer actions
  F_ROLL = 'F_ROLL',
  F_SWITCH_PAPER = 'F_SWITCH_PAPER',
  F_SAVE = 'F_SAVE',
  F_MORE = 'F_MORE',

  // more tab switch
  TAB_MORE = 'TAB_MORE',
  TAB_JOB_LIST = 'TAB_JOB_LIST',
  TAB_WEAPON_LIST = 'TAB_WEAPON_LIST',
  TAB_GUIDE = 'TAB_GUIDE',

  // tab pane actions - 使用预设职业/武器
  PANE_USE_JOB = 'PANE_USE_JOB',
  PANE_USE_WEAPON = 'PANE_USE_WEAPON',
  // paper actions - 使用预设职业/武器
  PAPER_USE_JOB = 'PAPER_USE_JOB',
  PAPER_USE_WEAPON = 'PAPER_USE_WEAPON',

  // more controls
  MORE_AGE = 'MORE_AGE',
  MORE_RESET = 'MORE_RESET',
  MORE_INOUT = 'MORE_INOUT',
  MORE_DICE_MAID = 'MORE_DICE_MAID',
  MORE_EMPTY = 'MORE_EMPTY',
  MORE_TOTAL_MODE = 'MORE_TOTAL_MODE',
  MORE_REWARD = 'MORE_REWARD',

  // controls 内部的 actions - CA
  // 保存 -> 下载/重新生成
  CA_SAVE_DOWNLOAD = 'CA_SAVE_DOWNLOAD',
  CA_SAVE_REGEN = 'CA_SAVE_REGEN',
  // 导入导出 -> 复制导出文本/导入文本
  CA_INOUT_IMPORT = 'CA_INOUT_IMPORT',
  CA_INOUT_EXPORT = 'CA_INOUT_EXPORT',
  // 骰娘 -> 复制录卡指令
  CA_DICE_MAID_COPY = 'CA_DICE_MAID_COPY',

  // 花式加点
  POINT_METHOD = 'POINT_METHOD',
  // 花式加点 - 生成
  PM_GEN_KAEDE = 'PM_GEN_KAEDE',
  PM_GEN_ROLL = 'PM_GEN_ROLL',
  PM_GEN_BUY = 'PM_GEN_BUY',
  // 花式加点 - 使用
  PM_USE_KAEDE = 'PM_USE_KAEDE',
  PM_USE_ROLL = 'PM_USE_ROLL',
  PM_USE_BUY = 'PM_USE_BUY',
}
