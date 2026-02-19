import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

import router from './router';
import lean from './plugins/lean';
import './assets/main.scss';

const app = createApp(App);

app.use(router);
app.use(lean);

import('element-plus').then((ElementPlus) => {
  app.use(ElementPlus.default);
});

app.mount('#app');
