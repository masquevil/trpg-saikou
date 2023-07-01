import { inject } from 'vue';
import type { Ref } from 'vue';

import type { COCPlayerCharacter } from '@/types/coc-card/character';

export default function usePC() {
  const pc = inject<Ref<COCPlayerCharacter>>('pc');
  return pc;
}
