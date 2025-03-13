import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';  // 🔥 引入 Vue Router
import './assets/main.css';


const app = createApp(App);
app.use(router);

// 監聽路由變更並動態更新標題
router.afterEach((to) => {
  document.title = to.meta?.title || '羽毛球自學之路';
});

app.mount('#app');

