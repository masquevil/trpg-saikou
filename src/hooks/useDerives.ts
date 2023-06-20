import { watch } from 'vue';
import type { COCPlayerCharacter } from '@/types/coc-card/character';

// calculate derive attributes
export default function useDerives(pc: COCPlayerCharacter) {
  watch(
    () => pc.attributes,
    () => {
      let HPMax = '';
      let MPMax = '';
      const { con, siz, pow } = pc?.attributes || {};
      if (con && siz) HPMax = `${Math.floor((con + siz) / 10)}`;
      if (pow) MPMax = `${pow / 5}`;
      pc.deriveAttributes = {
        sanity: {
          start: `${pow || ''}`,
          // TODO
          max: `${pow ? 99 : ''}`,
        },
        hp: {
          max: HPMax,
        },
        mp: {
          max: MPMax,
        },
      };
    },
    { deep: true }
  );
}
