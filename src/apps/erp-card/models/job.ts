import type { JobGroup } from '../types/jobGroup';
import type { Job } from '../types/job';
import type { ERPAttributes } from '../types/character';

import { jobs } from '../constants/job';
import { jobGroups } from '../constants/jobGroup';
import { pointAttrTexts } from '../constants/texts';

function formatJobs(jobs: Job[], jobGroups: JobGroup[]) {
  const jobsMap = new Map<string, Job>();
  jobs.forEach((job) => {
    jobsMap.set(job.name, job);
  });
  const formattedGroups = jobGroups.map((jobGroup) => {
    const [jobGroupName, jobGroupPinyin] = jobGroup[0];
    const formattedJobs = jobGroup[1].map(([name, pinyin]) => ({
      name,
      pinyin,
    }));
    return {
      name: jobGroupName,
      pinyin: jobGroupPinyin,
      jobs: formattedJobs,
    };
  });

  return {
    jobs: jobsMap,
    jobGroups: formattedGroups,
  };
}

const jobsData = formatJobs(jobs, jobGroups);

export function getProPointByJobAndAttrs(jobName?: string, attrs?: Partial<ERPAttributes>) {
  const result = {
    text: '任选两项属性×2。',
    point: 0,
  };

  // 职业点数计算，取最高的两项属性
  const attrValues = Object.values(attrs || {}).sort();
  const point = attrValues.slice(-2).reduce((acc, cur) => acc + cur * 2, 0);
  result.point = point;

  // 职业技能推荐
  const job = jobsData.jobs.get(jobName || '');
  const pointTexts: string[] = [];
  job?.point.forEach((formula) => {
    formula.forEach(([key]) => {
      pointTexts.push(`${pointAttrTexts[key]}`);
    });
  });

  if (pointTexts.length) {
    result.text += `推荐：${pointTexts.join('、')}`;
  }

  return result;
}

export default jobsData;
