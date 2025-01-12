export enum VoyageEventNames {
  // entrance actions - E
  E_CROOM = 'E_CROOM', // 创建房间
  E_JROOM = 'E_JROOM', // 加入房间

  // venture board (room) actions - V
  V_MES = 'V_MES', // 发送消息
  V_ROLL = 'V_ROLL', // 掷骰子
}

export interface ParamsOfVoyage {
  voya: VoyageEventNames;
}
