import type { App } from 'vue';
import Lean from 'leancloud-storage';

import {
  appId as defaultAppId,
  appKey as defaultAppKey,
  serverURL as defaultServerURL,
} from '@/local/lean';

interface Options {
  appId?: string;
  appKey?: string;
  serverURL?: string;
}

export default {
  install(app: App, options: Options = {}) {
    const {
      appId = defaultAppId,
      appKey = defaultAppKey,
      serverURL = defaultServerURL,
    } = options;

    if (!appId || !appKey || !serverURL) return;

    Lean.init({
      appId,
      appKey,
      serverURL,
    });

    app.config.globalProperties.$lean = Lean;
  }
}
