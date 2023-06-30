export interface Weapon {
  name: string;
  // format: 格斗(斗殴)
  skill: string;
  // format: '1D3+DB'
  dam: string;
  // 是否穿透
  tho: number;
  // 射程
  range: string;
  // 次数
  round: string;
  // 装弹量
  num: string;
  // 故障率
  err: string;
}

export interface WeaponGroups {
  // 常规
  cg: string[];
  // 手枪
  sq: string[];
  // 半自动步枪
  bbq: string[];
  // 全自动步枪
  tsq: string[];
  // 霰弹枪
  xdq: string[];
  // 冲锋枪
  cfq: string[];
  // 狙击步枪
  jjbq: string[];
  // 机枪
  jq: string[];
  // 其它
  qt: string[];
}
