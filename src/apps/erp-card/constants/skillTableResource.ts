import type { SkillTableResource } from '../types/skillTableResource';
import { skills as skillsCoC } from './skill';

type GroupName1 =
  | '调查 _ 15'
  | '社交 _ 20'
  | '运动 _ 20'
  | '自然 _ 30'
  | '人文 _ 20'
  | '医疗 _ 30'
  | '格斗 _ 30'
  | '射击 _ 30'
  | '才能 40'
  // | '领域'
  // | '复合'
  | '其它';
export const mySkillResource1: SkillTableResource<GroupName1> = {
  skills: [
    ...skillsCoC,
    { name: '躲藏', init: 20 },
    { name: '闪避', init: 20 },
    {
      name: '格斗',
      init: 10,
      group: {
        show: ['斗殴', '', ''],
        skills: [
          { name: '斗殴', init: 25 },
          { name: '刀剑' },
          { name: '斧' },
          { name: '矛' },
          { name: '双截棍' },
        ],
      },
    },
    {
      name: '射击',
      init: 10,
      group: {
        show: ['手枪', '步/霰', '', ''],
        skills: [
          { name: '手枪', init: 20 },
          { name: '步/霰', init: 25 },
          { name: '冲锋枪' },
          { name: '弓弩' },
          { name: '机枪' },
          { name: '重武器' },
        ],
      },
    },
    { name: '弓道/弹弓', init: 15 },
    { name: '攀爬', init: 10 },
    { name: '跳跃', init: 10 },
    { name: '游泳', init: 10 },
    { name: '通用医学', init: 0 },
    { name: '精神分析', init: 0 },
    {
      name: '医疗',
      init: 0,
      group: {
        show: [''],
        skills: [
          { name: '药学' },
          { name: '兽医' },
          { name: '传统医学' },
          { name: '外科' },
          { name: '内科' },
        ],
      },
    },
    { name: '语言学(20)', init: 0 },
    {
      name: '人文',
      init: 0,
      group: {
        show: ['考古学', '人类学', ''],
        skills: [
          { name: '考古学' },
          { name: '人类学' },
          { name: '犯罪学' },
          { name: '写作', init: 5 },
          { name: '书法', init: 5 },
        ],
      },
    },
    {
      name: '外语',
      init: 0,
      combine: {
        show: [{ name: '', init: 20 }],
        // show: [...skillsCoC.find((skill) => skill.name === '外语')!.group!.skills],
      },
    },
    {
      name: '科学',
      init: 0,
      group: {
        show: ['', ''],
        skills: [
          { name: '数学' },
          { name: '物理' },
          { name: '化学' },
          { name: '微电子' },
          { name: '密码学' },
          { name: '工程学' },
          { name: '技术制图' },
        ],
      },
    },
    { name: '博物学', init: 10 },
    { name: '野外生存', init: 5 },
    {
      name: '自然',
      init: 0,
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
    { name: '锁匠', init: 0 },
    {
      name: '技艺',
      init: 0,
      group: {
        show: ['', ''],
        skills: [
          { name: '表演' },
          { name: '魔术' },
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
          { name: '爆破' },
        ],
      },
    },
    { name: '查阅', init: 20 },
    { name: '维修', init: 10 },
    { name: '信息检索', init: 20 },
    {
      name: '网络',
      init: 0,
      group: {
        show: ['', ''],
        skills: [
          { name: '信息安全' },
          { name: '编程' },
          { name: '影像处理' },
          { name: '社会工程' },
          { name: '网络传播' },
        ],
      },
    },
    { name: '驾驶', init: 20 },
    {
      name: '操纵',
      init: 0,
      combine: {
        show: [
          { name: '汽车', init: 20 },
          { name: '船', init: 20 },
          { name: '飞行器', init: 40 },
          { name: '重型机械', init: 40 },
        ],
      },
    },
    {
      name: '',
      init: 0,
      group: {
        show: ['', '', ''],
        skills: [],
      },
    },
  ],
  groups: {
    '调查 _ 15': ['侦查', '聆听', '查阅', '躲藏', '追踪', '导航', '估价'],
    '社交 _ 20': ['话术', '说服', '取悦', '恐吓', '心理学'],
    '运动 _ 20': ['投掷', '弓道/弹弓', '攀爬', '跳跃', '游泳'],
    '格斗 _ 30': ['闪避', '格斗'],
    '射击 _ 30': ['射击'],
    '医疗 _ 30': ['急救', '通用医学', '精神分析', '医疗'],
    '人文 _ 20': ['历史', '法律', '神秘学', '人文'],
    '自然 _ 30': ['博物学', '野外生存', '自然'],
    '才能 40': [
      '维修',
      '妙手',
      '乔装',
      '会计',
      '驯兽',
      '骑术',
      '锁匠',
      '技艺',
      '科学',
      '网络',
      '语言学(20)',
      '外语',
      '驾驶',
      '操纵',
    ],
    // 领域: [],
    // 复合: [],
    其它: [''],
  },
  groupOrder: [
    '调查 _ 15',
    '社交 _ 20',
    '运动 _ 20',
    '自然 _ 30',
    '人文 _ 20',
    '医疗 _ 30',
    '格斗 _ 30',
    '射击 _ 30',
    '才能 40',
    // '领域',
    // '复合',
    '其它',
  ],
};
