import type { JobGroup } from '@/types/coc-card/jobGroup';
import type { Job } from '@/types/coc-card/job';

import { jobs } from '@/constants/coc-card/job';
import { jobGroups } from '@/constants/coc-card/jobGroup';

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

export default formatJobs(jobs, jobGroups);
