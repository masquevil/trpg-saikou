import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import { useColorMode } from '@vueuse/core';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    theme?: 'dark' | 'light';
  }
}

const router = createRouter({
  history:
    import.meta.env.MODE !== 'production'
      ? createWebHistory(import.meta.env.BASE_URL)
      : createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/coc-card',
      name: 'COCCard',
      component: () => import('../views/COCCardView.vue'),
      meta: {
        title: 'COC 车卡',
      },
    },
    {
      path: '/stories',
      name: 'stories',
      component: () => import('../views/StoryListView.vue'),
    },
    {
      path: '/self',
      name: 'self',
      component: () => import('../views/SelfView.vue'),
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
});

export default router;
