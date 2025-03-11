import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Courses from '../views/Courses.vue'; // 已從你的代碼中提取
import VideoSelfStudy from '../views/VideoSelfStudy.vue'; // 新增
import Contact from '../views/Contact.vue'; // 假設已存在

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/courses', name: 'Courses', component: Courses },
  { path: '/videos', name: 'VideoSelfStudy', component: VideoSelfStudy }, // 新增
  { path: '/contact', name: 'Contact', component: Contact }, // 假設已存在
  // 如果有登入頁面，可以添加：
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;