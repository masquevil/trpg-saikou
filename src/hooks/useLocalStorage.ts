import { useStorage, RemovableRef } from '@vueuse/core';

import { LSNamespace, LSApp } from '@/types/ls';

interface LocalStorageOptions<Store> {
  namespace?: LSNamespace;
  app: LSApp;
  defaults?: Store;
  versionChecker?: (storedVersion: number, storeRef: RemovableRef<Store>) => number;
}

export default function useLocalStorage<Store extends object>(options: LocalStorageOptions<Store>) {
  const {
    namespace = LSNamespace.SoxFE,
    app,
    versionChecker = (_, storeRef) => {
      storeRef.value = null;
      return -1;
    },
    defaults = {} as Store,
  } = options;
  const storage = window.localStorage;

  const baseKey = `${namespace}#${app}`;
  const versionCheckerKey = `${baseKey}##versionChecker`;

  const store = useStorage<Store>(baseKey, defaults, storage, {
    mergeDefaults: true,
  });

  const versionStore = useStorage<Record<string, number>>(versionCheckerKey, {}, storage);
  const storedVersion = versionStore.value[baseKey];
  const currentVersion = versionChecker(storedVersion, store);
  versionStore.value[baseKey] = currentVersion;

  function listItems() {
    return store.value;
  }

  function countItems() {
    return Object.keys(listItems()).length;
  }

  function getItem<K extends keyof Store>(key: K) {
    return store.value[key];
  }

  function setItem<K extends keyof Store>(key: K, value: Store[K]) {
    store.value[key] = value;
  }

  function removeItem(key: keyof Store) {
    delete store.value[key];
  }

  function clear() {
    store.value = null;
  }

  return {
    store,
    listItems,
    countItems,
    getItem,
    setItem,
    removeItem,
    clear,
  };
}
