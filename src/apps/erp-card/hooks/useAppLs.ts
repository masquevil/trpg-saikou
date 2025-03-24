import useLocalStorage from '@/hooks/useLocalStorage';

import { LSApp } from '@/types/ls';
import type { ERPPlayerCharacter } from '../types/character';
import type { ERPCardViewData } from '../types/viewData';

interface Store {
  showTotalSeparation?: boolean;
  autoSaved?: {
    pc: ERPPlayerCharacter;
    viewData: ERPCardViewData;
    lastModified: number; // number of date
  };
}

const ls = useLocalStorage<Store>({
  app: LSApp.ERPCard,
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
