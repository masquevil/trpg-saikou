import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

import router from './router';
import lean from './plugins/lean';
import './assets/main.scss';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(lean);

app.mount('#app');
