import useLocalStorage from '@/hooks/useLocalStorage';

import { LSApp } from '@/types/ls';
import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';

interface Store {
  showTotalSeparation?: boolean;
  autoSaved?: {
    pc: COCPlayerCharacter;
    viewData: COCCardViewData;
    lastModified: number; // number of date
  };
}

const ls = useLocalStorage<Store>({
  app: LSApp.COCCard,
  versionChecker() {
    return 1.1;
  },
});

if (import.meta.env.DEV) {
  console.log(`ls:${ls.appName}:${ls.version}`, ls);
  // @ts-ignore
  window.ls = ls;
}

export default function () {
  return ls;
}
