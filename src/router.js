import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Courses from './views/Courses.vue';
import Contact from './views/Contact.vue';
import VideoSelfStudy from './views/VideoSelfStudy.vue'; // 新增看影片自學頁面

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/courses', component: Courses },
  { path: '/contact', component: Contact },
  { path: '/videos', component: VideoSelfStudy }, // 新增看影片自學路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;