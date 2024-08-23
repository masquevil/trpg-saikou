export interface ThrowDiceDetail {
  result: number;
  detail: number[];
  text: string;
}

export interface GroupThrowDiceDetail {
  text: string;
  details: ThrowDiceDetail[];
}
