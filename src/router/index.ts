import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import COCCardView from '@/views/COCCardView.vue';
import StoryListView from '@/views/StoryListView.vue';
import SelfView from '@/views/SelfView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/coc-card',
      name: 'COCCard',
      component: COCCardView,
    },
    {
      path: '/stories',
      name: 'stories',
      component: StoryListView,
    },
    {
      path: '/self',
      name: 'self',
      component: SelfView,
    },
  ],
});

export default router;
