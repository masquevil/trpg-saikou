// ERP basic pack 04: medical 医疗
import type { ResourceSkillPack } from '../../../types/resources/resourceSkill';

export const packMedical: ResourceSkillPack = {
  name: '医疗',
  initPlus: 30,
  skills: [
    { name: '急救', init: 30 },
    { name: '精神分析', init: 0 },
    {
      name: '医疗',
      init: 0,
      group: {
        show: [''],
        skills: [
          { name: '外科' },
          { name: '内科' },
          { name: '药学' },
          { name: '护理' },
          { name: '美容科' },
          { name: '传统医学' },
          { name: '兽医' },
        ],
      },
    },
  ],
};

export default packMedical;
