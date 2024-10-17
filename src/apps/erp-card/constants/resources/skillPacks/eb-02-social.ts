// ERP basic pack 02: social 社交
import type { ResourceSkillPack } from '../../../types/resources/resourceSkill';

export const packSocial: ResourceSkillPack = {
  name: '社交',
  initPlus: 20,
  skills: [
    { name: '话术', init: 25 },
    { name: '说服', init: 10 },
    { name: '取悦', init: 15 },
    { name: '恐吓', init: 15 },
    { name: '心理学', init: 10 },
  ],
};

export default packSocial;
