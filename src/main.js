import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';  // 🔥 引入 Vue Router

const app = createApp(App);
app.use(router);
app.mount('#app');
