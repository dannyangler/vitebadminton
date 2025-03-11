import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Courses from './views/Courses.vue'; // 加入課程頁面
import Contact from './views/Contact.vue'; // 新增聯絡我們頁面

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/courses', component: Courses }, // 新增課程頁面路由
  { path: '/contact', component: Contact }, // 新增聯絡我們頁面路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
