// ERP basic pack 03: battle 战斗
import type { ResourceSkillPack } from '../../../types/resources/resourceSkill';

export const packBattle: ResourceSkillPack = {
  name: '战斗',
  initPlus: 30,
  skills: [
    { name: '闪避', init: 0 },
    {
      name: '格斗',
      init: 0,
      group: {
        show: ['斗殴', '', ''],
        skills: [
          { name: '斗殴', init: 25 },
          { name: '刀剑', init: 20 },
          { name: '矛', init: 20 },
          { name: '斧', init: 15 },
          { name: '绞索', init: 15 },
          { name: '链锯', init: 10 },
          { name: '链枷', init: 10 },
          { name: '鞭', init: 5 },
        ],
      },
    },
  ],
};
