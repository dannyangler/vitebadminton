<template>
  <div class="videos-container">
    <!-- Title Section -->
    <section class="section title-section">
      <h2>🎥 看影片自學</h2>
      <p>精選羽毛球教學影片，搭配分類與短評，幫助您系統化學習！</p>
    </section>

    <!-- Video Categories -->
    <section class="section video-categories">
      <h3>影片分類</h3>
      <div class="category-tabs">
        <button 
          v-for="category in categories" 
          :key="category.id" 
          :class="{ active: activeCategory === category.id }"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>
    </section>

    <!-- Video List -->
    <section class="section video-list">
      <div class="video-grid">
        <div 
          class="video-card" 
          v-for="video in filteredVideos" 
          :key="video.id"
        >
          <h4>{{ video.title }}</h4>
          <div class="video-wrapper">
            <iframe
              :src="video.url"
              :title="video.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <p class="review">{{ video.review }}</p>
          <a :href="video.url" target="_blank" class="video-cta">在 YouTube 上觀看</a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact">
      <h3>📩 有問題嗎？</h3>
      <p>歡迎加入我們的 Line 官方帳號，與我們交流學習心得！</p>
      <a href="https://lin.ee/dcqzudR" class="cta-btn">加入 Line</a>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: "VideoSelfStudy",
  setup() {
    // 分類數據
    const categories = ref([
      { id: 'all', name: '全部影片' },
      { id: 'basics', name: '基礎技巧' },
      { id: 'intermediate', name: '中階技術' },
      { id: 'advanced', name: '進階戰術' }
    ]);

    // 影片數據 - 從 @self_learning_badminton 頻道添加
    const videos = ref([
      { 
        id: 1, 
        title: "羽毛球基礎技巧 - 正確握拍與發力打好高遠球", 
        url: "https://www.youtube.com/embed/pWo0YYW7iZU",
        category: 'basics',
        review: "這部影片詳細講解了握拍的基本原理，對初學者非常友好，建議反覆觀看並練習發力動作。"
      },
      { 
        id: 2, 
        title: "進階攻擊技巧 - 扣殺與切球", 
        url: "https://www.youtube.com/embed/4HHeOHgdc_8?enablejsapi=1",
        category: 'intermediate',
        review: "扣殺的動作分解很清晰，適合有基礎的球友學習如何增加進攻威脅性。"
      },
      { 
        id: 3, 
        title: "比賽戰術訓練 - 心理戰與時間差", 
        url: "https://www.youtube.com/embed/MwAtlgRK1D4?enablejsapi=1",
        category: 'basic',
        review: "影片中的戰術分析很實用，尤其是時間差的運用，能有效提升比賽中的應變能力。"
      },
      // 以下為假設來自 @self_learning_badminton 的其他影片範例
      { 
        id: 4, 
        title: "羽球初學者步伐訓練", 
        url: "https://www.youtube.com/embed/yzCAAlOfnu4",
        category: 'basics',
        review: "簡單易懂的步伐教學，適合初學者建立基礎移動能力。"
      },
      // 你可以在這裡繼續添加更多影片
    ]);

    // 當前選中的分類
    const activeCategory = ref('all');

    // 根據分類過濾影片
    const filteredVideos = computed(() => {
      if (activeCategory.value === 'all') {
        return videos.value;
      }
      return videos.value.filter(video => video.category === activeCategory.value);
    });

    // 頁面加載時設置 meta 資訊
    onMounted(() => {
      document.title = '看影片自學 - 羽毛球自學之路';
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '精選羽毛球教學影片，包含基礎技巧、中階技術與進階戰術，搭配短評助您自學。';
      document.head.appendChild(meta);
    });

    return {
      categories,
      videos,
      activeCategory,
      filteredVideos
    };
  }
};
</script>

<style scoped>
/* 原有樣式保持不變 */
.videos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 20px;
}

.section {
  padding: 40px 20px;
  margin-bottom: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.section:not(:last-child)::after {
  content: "";
  display: block;
  width: 50%;
  margin: 20px auto 0;
  border-bottom: 1px dashed #3498db;
}

.title-section {
  text-align: center;
}
.title-section h2 {
  font-size: 32px;
  color: #005bbb;
  margin-bottom: 15px;
}
.title-section p {
  font-size: 18px;
  color: #555;
}

.video-categories {
  text-align: center;
}
.video-categories h3 {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 20px;
}
.category-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
.category-tabs button {
  padding: 10px 20px;
  background: #f4f4f4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.category-tabs button:hover,
.category-tabs button.active {
  background: #3498db;
  color: white;
}

.video-list {
  background: #f4f4f4;
}
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}
.video-card {
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.video-card:hover {
  transform: translateY(-5px);
}
.video-card h4 {
  font-size: 18px;
  color: #005bbb;
  margin-bottom: 10px;
}
.video-wrapper {
  position: relative;
  padding-top: 56.25%;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.review {
  font-size: 14px;
  color: #555;
  margin: 10px 0;
  font-style: italic;
}
.video-cta {
  display: inline-block;
  padding: 8px 16px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.video-cta:hover {
  background: #2980b9;
}

.contact {
  text-align: center;
  background: #222;
  color: white;
}
.contact h3 {
  font-size: 24px;
  color: #ffcc00;
  margin-bottom: 15px;
}
.contact p {
  font-size: 16px;
  margin-bottom: 20px;
}
.cta-btn {
  display: inline-block;
  padding: 12px 24px;
  background: #ffcc00;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.cta-btn:hover {
  background: #e6b800;
}

@media (max-width: 768px) {
  .section {
    padding: 30px 15px;
  }
  .title-section h2 {
    font-size: 28px;
  }
  .title-section p {
    font-size: 16px;
  }
  .video-categories h3 {
    font-size: 22px;
  }
  .category-tabs button {
    padding: 8px 16px;
  }
  .video-card h4 {
    font-size: 16px;
  }
  .review {
    font-size: 13px;
  }
}
</style>