import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { routes, handleHotUpdate } from 'vue-router/auto-routes';
import { useColorMode } from '@vueuse/core';
import { nextTick } from 'vue';
import { ElMessageBox } from 'element-plus';
import 'element-plus/es/components/message-box/style/css';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    theme?: 'dark' | 'light';
  }
}

const { VITE_TARGET_ENV = '' } = import.meta.env;
const isHashMode = ['pages', 'hash'].includes(VITE_TARGET_ENV);

// 路由表由 `vue-router/vite` 插件根据 `src/pages` 目录自动生成
// 每个页面的 name / meta 定义在对应 SFC 的 `<route>` 自定义块中
const router = createRouter({
  history: !isHashMode
    ? createWebHistory(import.meta.env.BASE_URL)
    : createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

// 文件路由的 HMR 支持
if (import.meta.hot) {
  handleHotUpdate(router);
}

// dynamic set title
router.beforeEach((to) => {
  const { title } = to.meta;

  // set title
  const titleSuffix = 'TRPG 赛高 | 侠小然';
  const docTitle = title ? `${title} | ${titleSuffix}` : titleSuffix;
  document.title = docTitle;
  document.head
    .querySelector('meta[name="application-name"]')
    ?.setAttribute('content', title || 'TRPG 赛高');

  return true;
});

// dynamic set theme, default to dark
const colorMode = useColorMode();
router.afterEach(async (to) => {
  colorMode.value = to.meta.theme || 'dark';
  ElMessageBox.close();
  await nextTick();
  const background = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-bg')
    .trim();
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
});

export default router;
