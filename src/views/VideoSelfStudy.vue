<script setup>
import { ref, onMounted } from 'vue';

// 最新影片列表
const videoList = ref([]);

// 設定來自 YouTube 頻道的影片 ID
const fetchVideos = () => {
  videoList.value = [
    { title: "如何練好正手高遠球?", videoId: "pWo0YYW7iZU" },
    { title: "如何練好反手高遠球?", videoId: "-UFnMGWa-e4" },
    { title: "殺球關鍵技巧大揭密！", videoId: "4HHeOHgdc_8" }
  ];
};

// 組件掛載時載入影片
onMounted(() => {
  fetchVideos();
});
</script>

<template>
  <div class="video-container">
    <h1>📺 羽毛球自學影片</h1>
    <p>學習最新的羽球技巧，隨時隨地提升你的球技！</p>

    <!-- 影片網格 -->
    <div class="video-grid">
      <div v-for="video in videoList" :key="video.videoId" class="video-card">
        <iframe
          :src="`https://www.youtube.com/embed/${video.videoId}`"
          frameborder="0"
          allowfullscreen
          class="video-iframe"
        ></iframe>
        <h3>{{ video.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 影片頁面容器 */
.video-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

/* 影片網格 */
.video-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
}

/* 影片卡片 */
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

/* 影片嵌入框 */
.video-iframe {
  width: 100%;
  height: 180px;
  border-radius: 8px;
}

/* 行動版樣式 */
@media (min-width: 768px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr); /* 電腦版兩排 */
  }
}

@media (max-width: 767px) {
  .video-grid {
    grid-template-columns: 1fr; /* 手機版單排 */
  }
}
</style>
