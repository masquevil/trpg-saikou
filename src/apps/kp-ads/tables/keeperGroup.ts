import type { KeeperGroupTableRow } from '../types/keeperGroup';

const keeperGroupTable: KeeperGroupTableRow[] = [
  {
    key: 'sox',
    type: 'personal',
    name: '侠小然',
    lists: [
      {
        key: 'prepared',
        title: '上架模组（随时找我约！只要有时间！）',
        stories: [
          ['', '湖之仆从'],
          ['', '失落的缴款'],
          ['', '醒来'],
          ['', '让孩子们来我身边'],
          ['', '芝加哥之王'],
        ],
      },
      {
        key: 'preparing',
        title: '准备中的模组（备团时间 1~2 周，也可以约列表里没有的模组！）',
        stories: [
          ['', '周而复始'],
          ['', '小瓢虫快回家'],
          ['', '亲密邂逅'],
          ['', '只有猫知道的世界'],
          ['', '狂气山脉~邪神的山岭~'],
          ['', '狂气山脉~梦寻未知之峰~'],
          ['', '疯狂嘉年华'],
          ['', '死光'],
          ['', '大幕山'],
          ['', '燃烧的星辰'],
          ['', '不夜城的苍白之颜'],
          ['', '不息的渴望'],
        ],
      },
    ],
  },
];

export default keeperGroupTable;
