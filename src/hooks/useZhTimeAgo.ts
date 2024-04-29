import { useTimeAgo } from '@vueuse/core';

type Time = Parameters<typeof useTimeAgo>[0];
type Options = Parameters<typeof useTimeAgo>[1];

export default function useZhTimeAgo(time: Time, options?: Options) {
  return useTimeAgo(
    time,
    Object.assign(
      {
        controls: true,
        messages: {
          justNow: '就在刚刚',
          past: '{0}之前',
          future: '{0}之后',
          invalid: '',
          second: '{0}秒',
          minute: '{0}分钟',
          hour: '{0}小时',
          day: '{0}天',
          month: '{0}个月',
          year: '{0}年',
        },
      },
      options,
    ),
  );
}
