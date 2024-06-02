import { useTimeAgo } from '@vueuse/core';
import type { UseTimeAgoOptions, UseTimeAgoMessages } from '@vueuse/core';

type Time = Parameters<typeof useTimeAgo>[0];

export default function useZhTimeAgo(time: Time, options?: UseTimeAgoOptions<true>) {
  const messages: UseTimeAgoMessages = {
    justNow: '就在刚刚',
    past: '{0}之前',
    future: '{0}之后',
    invalid: '',
    second: '{0}秒',
    minute: '{0}分钟',
    hour: '{0}小时',
    day: '{0}天',
    week: '{0}周',
    month: '{0}个月',
    year: '{0}年',
  };
  return useTimeAgo(
    time,
    Object.assign(
      {
        controls: true,
        messages,
      },
      options,
    ),
  );
}
