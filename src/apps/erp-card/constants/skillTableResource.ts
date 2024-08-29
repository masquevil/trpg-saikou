import type { SkillTableResource } from '../types/skillTableResource';
import { skills as skillsCoC } from './skill';

type GroupName1 =
  | '刑侦'
  | '社交'
  | '运动'
  | '战斗'
  | '医疗'
  | '人文'
  | '理工'
  | '自然'
  | '技术'
  | '操纵'
  | '网络'
  | '其它';
export const mySkillResource1: SkillTableResource<GroupName1> = {
  skills: [
    ...skillsCoC,
    { name: '躲藏', init: 20 },
    {
      name: '运动',
      init: 20,
      group: {
        show: ['投掷', '攀爬', '跳跃', '游泳', '', ''],
        skills: [
          { name: '投掷' },
          { name: '攀爬' },
          { name: '跳跃' },
          { name: '游泳' },
          { name: '杂技' },
          { name: '奔跑' },
          { name: '篮球' },
          { name: '足球' },
          { name: '乒乓' },
          { name: '羽毛球' },
          { name: '网球' },
        ],
      },
    },
    {
      name: '医疗',
      init: 1,
      group: {
        show: ['急救', '外科', '精神科', ''],
        skills: [
          { name: '急救', init: 30 },
          { name: '外科' },
          { name: '精神科' },
          { name: '内科' },
          { name: '药学' },
          { name: '传统医学' },
        ],
      },
    },
    {
      name: '人文',
      init: 1,
      group: {
        show: ['考古学', '人类学', ''],
        skills: [
          { name: '考古学' },
          { name: '人类学' },
          { name: '艺术鉴赏' },
          { name: '写作', init: 5 },
          { name: '书法', init: 5 },
        ],
      },
    },
    {
      name: '理工',
      init: 1,
      group: {
        show: ['', ''],
        skills: [
          { name: '数学' },
          { name: '物理' },
          { name: '化学' },
          { name: '密码学' },
          { name: '微电子' },
          { name: '土木工程' },
          { name: '技术制图' },
        ],
      },
    },
    { name: '野外生存', init: 5 },
    {
      name: '自然',
      init: 1,
      group: {
        show: ['', ''],
        skills: [
          { name: '地质学' },
          { name: '生物学' },
          { name: '动物学' },
          { name: '植物学' },
          { name: '天文学' },
          { name: '气象学' },
        ],
      },
    },
    {
      name: '技艺',
      init: 1,
      group: {
        show: ['', ''],
        skills: [
          { name: '表演' },
          { name: '舞蹈' },
          { name: '声乐' },
          { name: '器乐' },
          { name: '绘画' },
          { name: '摄影' },
          { name: '烹饪' },
          { name: '裁缝' },
          { name: '理发' },
          { name: '木工' },
          { name: '铁匠' },
          { name: '读唇' },
          { name: '盲文' },
        ],
      },
    },
    { name: '信息检索', init: 20 },
    { name: '信息安全', init: 1 },
    {
      name: '网络',
      init: 1,
      group: {
        show: ['', ''],
        skills: [
          { name: '影像处理' },
          { name: '软件工程' },
          { name: '社会工程' },
          { name: '网络传播' },
        ],
      },
    },
  ],
  groups: {
    刑侦: ['侦查', '聆听', '躲藏', '追踪', '导航', '估价'],
    社交: ['话术', '说服', '取悦', '恐吓', '心理学'],
    运动: ['运动'],
    战斗: ['闪避', '格斗', '射击'],
    医疗: ['医疗'],
    人文: ['图书馆使用', '历史', '法律', '会计', '神秘学', '人文', '母语', '外语'],
    理工: ['机械维修', '电气维修', '理工'],
    自然: ['博物学', '野外生存', '自然'],
    技术: ['乔装', '妙手', '锁匠', '驯兽', '技艺'],
    操纵: ['汽车驾驶', '骑术', '驾驶', '操作重型机械'],
    网络: ['信息检索', '信息安全', '网络'],
    其它: [''],
  },
  groupOrder: [
    '刑侦',
    '社交',
    '战斗',
    '医疗',
    '运动',
    '操纵',
    '自然',
    '人文',
    '理工',
    '网络',
    '技术',
    '其它',
  ],
};
