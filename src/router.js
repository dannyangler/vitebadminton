import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue'; // Merged About & Contact
import Courses from '@/views/Courses.vue';
import VideoSelfStudy from '@/views/VideoSelfStudy.vue';
import Articles from '@/views/Articles.vue'; // ✅ New 技術文章 page

const routes = [
  { path: '/', component: Home, meta: { title: '羽毛球自學之路 - 首頁' } },
  { path: '/about', component: About, meta: { title: '羽毛球自學之路 - 關於我們' } }, 
  { path: '/courses', component: Courses, meta: { title: '羽毛球自學之路 - 課程總覽' } },
  { path: '/videos', component: VideoSelfStudy, meta: { title: '羽毛球自學之路 - 看影片自學' } },
  { path: '/articles', component: Articles, meta: { title: '羽毛球自學之路 - 技術文章' } } // ✅ New route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update page title dynamically
router.afterEach((to) => {
  document.title = to.meta.title || '羽毛球自學之路';
});

export default router;
