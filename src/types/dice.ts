export interface ThrowDiceDetailOptions {
  dice: number;
  times: number;
  // 大于零表示取较大的几个骰子，小于零表示取较小的几个骰子
  pick?: number;
  plus?: number;
  align?: boolean;
}

export interface ThrowDiceDetail {
  result: number;
  text: string;
  detail: number[];
  detailUsed?: number[];
  detailRemoved?: number[];
}

export interface GroupThrowDiceDetail {
  text: string;
  details: ThrowDiceDetail[];
}
