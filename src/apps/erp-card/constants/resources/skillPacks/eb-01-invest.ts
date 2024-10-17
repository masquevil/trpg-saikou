// ERP basic pack 01: invest 刑侦
import type { ResourceSkillPack } from '../../../types/resources/resourceSkill';

export const packInvest: ResourceSkillPack = {
  name: '刑侦',
  initPlus: 20,
  skills: [
    { name: '侦查', init: 25 },
    { name: '聆听', init: 20 },
    { name: '查阅', init: 20 },
    { name: '躲藏', init: 20 },
    { name: '追踪', init: 10 },
    { name: '导航', init: 10 },
    { name: '估价', init: 5 },
  ],
};

export default packInvest;
