<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CoachIntro from './CoachIntro.vue'; // Import the coach introduction component

// Vue Router
const router = useRouter();

// Latest videos list (fetched from VideoSelfStudy.vue)
const latestVideos = ref([]);

const fetchLatestVideos = () => {
  latestVideos.value = [
    { title: "如何練好正手高遠球?", videoId: "pWo0YYW7iZU" },
    { title: "如何練好反手高遠球?", videoId: "-UFnMGWa-e4" },
    { title: "殺球關鍵技巧大揭密！", videoId: "4HHeOHgdc_8" }
  ];
};

onMounted(() => {
  fetchLatestVideos();
});

const navigateTo = (path) => {
  router.push(path);
};

function newFunction() {
  return "video-iframe";
}
</script>

<template>
  <div class="home-container">
    <!-- Hero Section with Image + Encouraging Text -->
    <section class="hero">
      <div class="hero-content">
        <img src="/images/badminton-hero.jpg" alt="Badminton Action" class="hero-image" />
        <div class="hero-text">
          <h1>🏸 羽毛球自學之路</h1>
          <p>
            想提升你的羽球技術嗎？<br>
            無論是新手還是進階選手，這裡有系統化的學習資源，幫助你提升技術、戰術與比賽表現！
          </p>
        </div>
      </div>
    </section>

    <!-- Meet the Coach Section -->
    <section class="section">
      <h2>👨‍🏫 認識你的教練</h2>
      <CoachIntro />
      <button @click="navigateTo('/about')" class="btn-secondary">了解更多</button>
    </section>

    <!-- Latest Videos Section -->
    <section class="section">
      <h2>📺 最新自學影片</h2>
      <div class="video-grid">
        <div v-for="video in latestVideos" :key="video.videoId" class="video-card">
          <iframe
            :src="`https://www.youtube.com/embed/${video.videoId}`"
            frameborder="0"
            allowfullscreen
            class="video-iframe"
          ></iframe>
          <h3>{{ video.title }}</h3>
        </div>
      </div>
      <button @click="navigateTo('/videos')" class="btn-secondary">查看更多影片</button>
    </section>

    <!-- Technical Articles Section (Previously "聯絡我們") -->
    <section class="section">
      <h2>📖 技術文章</h2>
      <p>深入解析羽毛球技術、戰術與訓練方法，讓你的球技更上一層樓！</p>
      <button @click="navigateTo('/articles')" class="btn-secondary">閱讀技術文章</button>
    </section>
  </div>
</template>

<style scoped>
/* Layout */
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Hero Section */
.hero {
  background: #f8f8f8;
  padding: 60px 20px;
  border-radius: 10px;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.hero-image {
  width: 50%;
  max-width: 400px;
  border-radius: 8px;
}

.hero-text {
  flex: 1;
  text-align: left;
}

.hero-text h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-text p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}

/* Sections */
.section {
  padding: 40px 20px;
  text-align: center;
  margin-bottom: 20px;
  background: #f9f9f9;
  border-radius: 10px;
}

/* Video Grid */
.video-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
}

/* Video Cards */
.video-card {
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: scale(1.05);
}

/* Video Iframe */
.video-iframe {
  width: 100%;
  height: 180px;
  border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-image {
    width: 80%;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Buttons */
.btn-secondary {
  display: inline-block;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;
}

.btn-secondary:hover {
  background: #0056b3;
}
</style>
