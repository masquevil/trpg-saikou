import { watch } from 'vue';
import type { Ref } from 'vue';
import type { COCPlayerCharacter } from '@/types/coc-card/character';

// calculate derive attributes
export default function useDerives(pc: Ref<COCPlayerCharacter>) {
  watch(
    () => pc.value.attributes,
    () => {
      let HPMax = '';
      let MPMax = '';
      const { con, siz, pow } = pc.value.attributes || {};
      if (con && siz) HPMax = `${Math.floor((con + siz) / 10)}`;
      if (pow) MPMax = `${pow / 5}`;
      pc.value.deriveAttributes = {
        sanity: {
          start: `${pow || ''}`,
        },
        hp: {
          start: HPMax,
        },
        mp: {
          start: MPMax,
        },
      };
    },
    { deep: true }
  );
}
