import { watch } from 'vue';
import type { Ref } from 'vue';
import type { ERPPlayerCharacter } from '../types/character';

// calculate derive attributes
export default function useDerives(pc: Ref<ERPPlayerCharacter>) {
  watch(
    () => pc.value.attributes,
    () => {
      let HPMax = '';
      let MPMax = '';
      const { con, pow } = pc.value.attributes || {};
      if (con) HPMax = `${Math.floor(con / 2)}`;
      if (pow) MPMax = `${Math.floor(pow / 5)}`;
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
    { deep: true },
  );
}
