import type { Skill } from '@/types/coc-card/skill';
import type { SkillGroupName } from '@/types/coc-card/skillGroup';
import type { SkillGroups } from '@/types/coc-card/formattedSkill';
import type {
  COCPlayerCharacter,
  SkillPoint,
} from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';

import { skills, skillNameAlias } from '@/constants/coc-card/skill';
import {
  skillGroups as groups,
  skillGroupOrder,
} from '@/constants/coc-card/skillGroup';

function getFormattedSkillGroups({
  skills,
  groups,
  groupOrder,
}: {
  skills: Skill[];
  groups: Record<SkillGroupName, string[]>;
  groupOrder: SkillGroupName[];
}): SkillGroups {
  const skillsMap = new Map<string, Skill>();
  skills.forEach((skill) => {
    skillsMap.set(skill.name, skill);
  });

  const table = groupOrder.map((groupName) => {
    const groupSkillNames = groups[groupName];
    const groupSkills = groupSkillNames.map((skillName) => {
      return skillsMap.get(skillName)!;
    });
    return {
      groupName,
      groupSkills,
    };
  });
  return table;
}

export const skillGroups = getFormattedSkillGroups({
  skills,
  groups: groups,
  groupOrder: skillGroupOrder,
});

export const dynamicInitFormulas: Record<
  string,
  (pc: COCPlayerCharacter) => number
> = {
  母语: (pc) => pc.attributes.edu || 0,
  闪避: (pc) => Math.floor((pc.attributes.dex || 0) / 2),
};

// 获取 pc 的数据，返回这个结构的字符串
// 第一部分——属性：力量60str60敏捷60dex60……
// 第二部分——衍生属性：hp12体力12mp12魔法12san60理智60san值60
// 第三部分——技能：母语60英语60日语40汽车驾驶25……
export function getDiceMaidStString(
  pc: COCPlayerCharacter,
  viewData: COCCardViewData,
) {
  const { attributes, deriveAttributes, skillPoints } = pc;
  const {
    str = 0,
    con = 0,
    siz = 0,
    dex = 0,
    app = 0,
    int = 0,
    pow = 0,
    edu = 0,
    luc = 0,
  } = attributes;
  const {
    hp = { start: 0 },
    mp = { start: 0 },
    sanity: san = { start: 0 },
  } = deriveAttributes || {};

  const attributesString = `力量${str}str${str}敏捷${dex}dex${dex}体质${con}con${con}外貌${app}app${app}智力${int}灵感${int}int${int}意志${pow}pow${pow}体型${siz}siz${siz}教育${edu}edu${edu}幸运${luc}运气${luc}luck${luc}`;
  const deriveAttributesString = `hp${hp.start}体力${hp.start}mp${mp.start}魔法${mp.start}san${san.start}理智${san.start}理智值${san.start}san值${san.start}`;
  let skillString = '';

  const pcPointsMap: Record<string, SkillPoint> = {};
  skillPoints.forEach(([fullName, skillPoint]) => {
    let skillName: string;
    let childSkillName: string | undefined;
    let childSkillPosition: number | undefined;
    if (Array.isArray(fullName)) {
      [skillName, , childSkillPosition] = fullName;
      childSkillName =
        viewData.showingChildSkills.get(skillName)![childSkillPosition];
    } else {
      skillName = fullName;
    }
    const mapKey = childSkillName
      ? `${skillName}-${childSkillName}`
      : skillName;
    pcPointsMap[mapKey] = skillPoint;
  });

  skills.forEach((skill) => {
    const { name, init, group } = skill;
    let realInit = dynamicInitFormulas[name]
      ? dynamicInitFormulas[name](pc)
      : init;
    const displayName = name.includes('Ω') ? name.slice(0, -1) : name;

    if (!group) {
      const point = pcPointsMap[name];
      let total = 0;
      if (point) {
        const { b = name ? realInit : 0, p = 0, i = 0, g = 0 } = point;
        total = b + p + i + g;
      } else {
        total = realInit;
      }
      skillString += `${displayName}${total}`;
      // aliases
      const aliases = skillNameAlias[name];
      if (aliases) {
        skillString += aliases.map((alias) => `${alias}${total}`).join('');
      }
      delete pcPointsMap[name];
    } else {
      let total = 0;
      // viewData
      viewData.showingChildSkills.get(name)!.forEach((childSkillName) => {
        if (!childSkillName) return;
        const mapKey = `${name}-${childSkillName}`;
        const point = pcPointsMap[mapKey];
        if (name) {
          realInit =
            skill.group?.skills.find((s) => s.name === childSkillName)?.init ||
            realInit;
        }
        if (point) {
          const { b = name ? realInit : 0, p = 0, i = 0, g = 0 } = point;
          total = b + p + i + g;
        } else if (group.show.includes(childSkillName)) {
          total = realInit;
        }
        skillString += `${childSkillName}${total}`;
        // aliases
        const aliases = skillNameAlias[childSkillName];
        if (aliases) {
          skillString += aliases.map((alias) => `${alias}${total}`).join('');
        }
        delete pcPointsMap[mapKey];
      });
      // special cases
      if (name === '母语') {
        if (total) {
          skillString += `母语${total}`;
        } else {
          const point = pcPointsMap[name];
          if (point) {
            const { b = name ? realInit : 0, p = 0, i = 0, g = 0 } = point;
            skillString += `母语${b + p + i + g}`;
          } else {
            skillString += `母语${realInit}`;
          }
        }
      }
    }
  });

  return `${attributesString}${deriveAttributesString}${skillString}`;
}
