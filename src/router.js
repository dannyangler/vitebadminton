import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Courses from './views/Courses.vue';
import Contact from './views/Contact.vue';
import VideoSelfStudy from './views/VideoSelfStudy.vue'; // 新增看影片自學頁面

const routes = [
  { path: '/', component: Home, meta: { title: '羽毛球自學之路 - 首頁' } },
  { path: '/about', component: About, meta: { title: '羽毛球自學之路 - 關於我們' } },
  { path: '/courses', component: Courses, meta: { title: '羽毛球自學之路 - 課程總覽' } },
  { path: '/contact', component: Contact, meta: { title: '羽毛球自學之路 - 聯絡我們' } },
  { path: '/videos', component: VideoSelfStudy, meta: { title: '羽毛球自學之路 - 看影片自學' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;