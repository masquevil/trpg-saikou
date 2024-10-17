// ERP basic pack 03: battle 战斗
import type { ResourceSkillPack } from '../../../types/resources/resourceSkill';

export const packBattle: ResourceSkillPack = {
  name: '射击',
  initPlus: 30,
  skills: [
    {
      name: '射击',
      init: 0,
      group: {
        show: ['手枪', '步/霰', ''],
        skills: [
          { name: '手枪', init: 20 },
          { name: '步/霰', init: 25 },
          { name: '冲锋枪', init: 15 },
          { name: '弓弩', init: 15 },
          { name: '机枪', init: 10 },
          { name: '重武器', init: 10 },
        ],
      },
    },
  ],
};
