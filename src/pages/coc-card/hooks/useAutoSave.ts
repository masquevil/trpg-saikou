import { watch, h, Fragment } from 'vue';
import type { Ref } from 'vue';
import { ElMessageBox } from 'element-plus';

import type { COCPlayerCharacter } from '../types/character';

import useZhTimeAgo from '@/hooks/useZhTimeAgo';
import useAppLs from './useAppLs';

const ls = useAppLs();

export default function useAutoSave(pcRef: Ref<COCPlayerCharacter>) {
  const autoSaved = ls.getItem('autoSaved');
  const { lastModified, pc: savedPC } = autoSaved || {};
  const { timeAgo } = useZhTimeAgo(lastModified || Date.now());

  watch(
    pcRef.value,
    () => {
      ls.setItem('autoSaved', {
        pc: pcRef.value,
        lastModified: Date.now(),
      });
    },
    {
      deep: true,
    },
  );

  if (autoSaved) {
    ElMessageBox.confirm(
      h(Fragment, null, [
        '是否加载您',
        h('b', { style: { fontWeight: 'bold' } }, timeAgo.value),
        '编辑的人物卡',
        savedPC?.name ? `：${savedPC.name}` : '',
      ]),
      '检测到编辑过的人物卡',
      { showClose: false },
    ).then(() => {
      pcRef.value = savedPC!;
    });
  }
}
