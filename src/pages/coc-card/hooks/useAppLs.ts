import useLocalStorage from '@/hooks/useLocalStorage';
import { LSApp } from '@/types/ls';

interface Store {}

const ls = useLocalStorage<Store>({
  app: LSApp.COCCard,
  versionChecker() {
    return 0;
  },
});

if (import.meta.env.DEV) {
  console.log('ls', ls);
  // @ts-ignore
  window.ls = ls;
}

export default ls;
