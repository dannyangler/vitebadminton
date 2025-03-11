<script setup>
import { ref, onMounted } from 'vue';

const videos = ref([
  { id: 1, title: "羽毛球基礎技巧", url: "https://www.youtube.com/embed/DCPq-zR3E9M?start=308&enablejsapi=1" },
  { id: 2, title: "進階攻擊技巧", url: "https://www.youtube.com/embed/4HHeOHgdc_8?enablejsapi=1" },
  { id: 3, title: "比賽戰術訓練", url: "https://www.youtube.com/embed/MwAtlgRK1D4?enablejsapi=1" },
]);

const featuredCourses = ref([
  { id: 1, title: "🏸 基礎動作與步法", description: "掌握正確的站位與步法，提高場上移動效率。" },
  { id: 2, title: "💥 進階攻擊與扣殺", description: "學習如何製造進攻機會，提升進攻威脅性。" },
  { id: 3, title: "🎯 戰術佈局與比賽應用", description: "分析比賽戰術，提升臨場應變能力。" },
]);

onMounted(() => {
  document.title = '羽毛球自學之路 - 系統化學習';
  const meta = document.createElement('meta');
  meta.name = 'description';
  meta.content = '系統化學習羽毛球，提升技術，專為社會組球員設計的課程與影片。';
  document.head.appendChild(meta);
});
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="section hero">
      <h2>🏸 羽毛球自學之路</h2>
      <p>讓每位社會組球員都能擁有系統化學習，快速提升技術！</p>
      <router-link to="/courses" class="cta-btn">立即開始學習</router-link>
    </section>

    <!-- Featured Courses -->
    <section class="section featured-courses">
      <h2>🔥 推薦課程</h2>
      <div class="course-list">
        <div class="course-card" v-for="course in featuredCourses" :key="course.id">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <router-link to="/courses" class="course-cta">了解更多</router-link>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="section video-section">
      <h2>🎥 精選影片</h2>
      <div class="video-list">
        <div class="video-card" v-for="video in videos" :key="video.id">
          <h3>{{ video.title }}</h3>
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
          <a :href="video.url" target="_blank" class="video-cta">在 YouTube 上觀看</a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials">
      <h2>🏆 學員回饋</h2>
      <p>「這個頻道幫助我從基礎提升到能夠參加比賽，真的受益良多！」— 王先生</p>
      <p>「教學系統化，讓我可以針對不足的地方加強，非常推薦！」— 陳小姐</p>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 20px;
}

/* General Section Styling */
.section {
  padding: 40px 20px;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Subtle Divider */
.section:not(:last-child)::after {
  content: "";
  display: block;
  width: 50%;
  margin: 20px auto 0;
  border-bottom: 1px dashed #3498db;
}

/* Hero Section */
.hero {
  background: linear-gradient(to right, #005bbb, #003366);
  color: white;
  text-align: center;
}
.hero h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
}
.hero p {
  font-size: 18px;
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

/* Featured Courses */
.featured-courses {
  background: #f4f4f4;
  text-align: center;
}
.featured-courses h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 20px;
}
.course-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.course-card {
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.course-card:hover {
  transform: translateY(-5px);
}
.course-card h3 {
  color: #005bbb;
  margin-bottom: 10px;
}
.course-cta {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.course-cta:hover {
  background: #2980b9;
}

/* Video Section */
.video-section {
  text-align: center;
}
.video-section h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 20px;
}
.video-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.video-card {
  width: 320px;
  padding: 10px;
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
.video-cta {
  display: inline-block;
  margin-top: 10px;
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

/* Testimonials */
.testimonials {
  background: #222;
  color: white;
  text-align: center;
}
.testimonials h2 {
  font-size: 28px;
  color: #ffcc00;
  margin-bottom: 20px;
}
.testimonials p {
  font-style: italic;
  margin: 10px auto;
  max-width: 600px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section {
    padding: 30px 15px;
    margin-bottom: 30px;
  }
  .hero h2 {
    font-size: 28px;
  }
  .hero p {
    font-size: 16px;
  }
  .featured-courses h2,
  .video-section h2,
  .testimonials h2 {
    font-size: 24px;
  }
  .course-card,
  .video-card {
    width: 100%;
    max-width: 320px;
  }
}
</style>