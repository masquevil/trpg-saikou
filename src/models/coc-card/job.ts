import type { JobGroup } from '@/types/coc-card/jobGroup';
import type { Job } from '@/types/coc-card/job';
import type { COCAttributes } from '@/types/coc-card/character';

import { jobs } from '@/constants/coc-card/job';
import { jobGroups } from '@/constants/coc-card/jobGroup';
import { pointAttrTexts } from '@/constants/coc-card/texts';

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

export function getProPointByJobAndAttrs(
  jobName?: string,
  attrs?: Partial<COCAttributes>
) {
  const result = {
    text: '',
    point: 0,
  };
  const job = jobsData.jobs.get(jobName || '');
  if (!job) return result;
  // 职业点数的公式和计算
  const pointTexts: string[] = [];
  job.point.forEach((formula) => {
    const textParts: string[] = [];
    const valueParts: number[] = [];

    formula.forEach(([key, rate]) => {
      textParts.push(`${pointAttrTexts[key]}×${rate}`);
      if (attrs) {
        valueParts.push((attrs[key] || 0) * rate);
      }
    });

    let partsText = textParts.join(' 或 ');
    if (textParts.length > 1) partsText = `(${partsText})`;
    pointTexts.push(partsText);

    result.point += Math.max(...valueParts);
  });

  result.text = pointTexts.join(' + ');

  return result;
}

export default jobsData;
