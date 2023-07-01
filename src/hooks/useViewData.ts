import { inject } from 'vue';

import type { COCCardViewData } from '@/types/coc-card/viewData';

export default function useViewData() {
  const viewData = inject<COCCardViewData>('viewData');
  return viewData;
}
