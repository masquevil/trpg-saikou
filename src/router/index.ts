import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { useColorMode } from '@vueuse/core';
import { ElMessageBox } from 'element-plus';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    theme?: 'dark' | 'light';
  }
}

const { VITE_TARGET_ENV = '' } = import.meta.env;
const isHashMode = ['pages', 'hash'].includes(VITE_TARGET_ENV);

const router = createRouter({
  history:
    !isHashMode
      ? createWebHistory(import.meta.env.BASE_URL)
      : createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../apps/home/AppView.vue'),
    },
    {
      path: '/coc-card',
      name: 'coc-card',
      component: () => import('../apps/coc-card/AppView.vue'),
      meta: {
        title: 'COC 车卡',
      },
    },
    {
      path: '/voyage',
      name: 'voyage',
      component: () => import('../apps/voyage/AppView.vue'),
      meta: {
        title: '维哲枢纽·在线跑团',
      },
    },
    {
      path: '/erp-card',
      name: 'erp-card',
      component: () => import('../apps/erp-card/AppView.vue'),
      meta: {
        title: 'ERP 车卡',
      },
    },
    {
      path: '/kp',
      name: 'kp-ads',
      component: () => import('../apps/kp-ads/AppView.vue'),
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('../apps/timer/AppView.vue'),
    },
    {
      path: '/roll',
      name: 'roll',
      component: () => import('../apps/roll/AppView.vue'),
    },
    {
      path: '/infinity-skill-table',
      name: 'infinity-skill-table',
      component: () => import('../apps/infinity-skill-table/AppView.vue'),
      meta: {
        title: '无限技能表',
      },
    },
    {
      path: '/tfg-stories',
      name: 'tfg-stories',
      component: () => import('../apps/record/StoryListView.vue'),
    },
    {
      path: '/self',
      name: 'self',
      component: () => import('../apps/record/SelfView.vue'),
    },
  ],
});

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
router.afterEach((to) => {
  const colorMode = useColorMode();
  colorMode.value = to.meta.theme || 'dark';
  ElMessageBox.close();
});

export default router;
