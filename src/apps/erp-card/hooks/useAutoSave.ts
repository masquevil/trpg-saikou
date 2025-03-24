// FIXME: 重构，view data 和 pc 都需要保存，考虑一下是合并还是怎么处理
import { watch, h, Fragment, nextTick } from 'vue';
import type { Ref } from 'vue';
import { ElMessageBox } from 'element-plus';

import type { ERPPlayerCharacter } from '../types/character';
import type { ERPCardViewData } from '../types/viewData';
import type { PageData } from '../types/pageData';

import useZhTimeAgo from '@/hooks/useZhTimeAgo';
import useAppLs from './useAppLs';

const ls = useAppLs();

export default function useAutoSave(
  pcRef: Ref<ERPPlayerCharacter>,
  options: {
    viewData: ERPCardViewData;
    pageData: PageData;
  },
) {
  const autoSaved = ls.getItem('autoSaved');
  const { lastModified, pc: savedPC, viewData: savedViewData } = autoSaved || {};
  const { timeAgo } = useZhTimeAgo(lastModified || Date.now());
  const { viewData, pageData } = options;

  watch(
    () => [pcRef.value, viewData],
    (a, b) => {
      console.log('auto save', a, b);
      ls.setItem('autoSaved', {
        pc: pcRef.value,
        viewData,
        lastModified: Date.now(),
      });
    },
    {
      deep: true,
    },
  );

  if (autoSaved) {
    nextTick(() => {
      let vnode;
      // 不知道为什么 timeAgo.value 可能会报错
      try {
        vnode = h(Fragment, null, [
          '是否加载您',
          h('b', { style: { fontWeight: 'bold' } }, timeAgo.value),
          '编辑的人物卡',
          savedPC?.name ? `：${savedPC.name}` : '',
        ]);
      } catch (e) {
        return;
      }
      ElMessageBox.confirm(vnode, '检测到编辑过的人物卡', { showClose: false }).then(() => {
        pageData.importing = true;
        pcRef.value = savedPC!;
        // TODO: 提取成 util
        if (savedViewData) {
          Object.keys(savedViewData).forEach((key) => {
            const k = key as keyof ERPCardViewData;
            viewData[k] = savedViewData[k] as any;
          });
        }
        nextTick(() => {
          pageData.importing = false;
        });
      });
    });
  }
}
