import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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

export default router;
