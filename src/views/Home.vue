<script setup>
import { ref } from 'vue';

// 精選影片資料
const videos = ref([
  {
    id: 1,
    title: "羽毛球基礎技巧",
    url: "https://www.youtube.com/embed/DCPq-zR3E9M?start=308",
  },
  {
    id: 2,
    title: "進階攻擊技巧",
    url: "https://www.youtube.com/embed/4HHeOHgdc_8",
  },
  {
    id: 3,
    title: "比賽戰術訓練",
    url: "https://www.youtube.com/embed/MwAtlgRK1D4?si=pn03BUF3Kc4JOz8t",
  },
]);

const featuredCourses = ref([
  { id: 1, title: "🏸 基礎動作與步法", description: "掌握正確的站位與步法，提高場上移動效率。" },
  { id: 2, title: "💥 進階攻擊與扣殺", description: "學習如何製造進攻機會，提升進攻威脅性。" },
  { id: 3, title: "🎯 戰術佈局與比賽應用", description: "分析比賽戰術，提升臨場應變能力。" },
]);
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <h1>🏸 羽毛球自學之路</h1>
      <p>讓每位社會組球員都能擁有系統化學習，快速提升技術！</p>
      <router-link to="/courses" class="cta-btn">立即開始學習</router-link>
    </section>

    <!-- Featured Courses -->
    <section class="featured-courses">
      <h2>🔥 推薦課程</h2>
      <div class="course-list">
        <div class="course-card" v-for="course in featuredCourses" :key="course.id">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <h2>🎥 精選影片</h2>
      <div class="video-list">
        <div class="video-card" v-for="video in videos" :key="video.id">
          <h3>{{ video.title }}</h3>
          <div class="video-wrapper">
            <iframe
              :src="video.url"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials (Optional) -->
    <section class="testimonials">
      <h2>🏆 學員回饋</h2>
      <p>「這個頻道幫助我從基礎提升到能夠參加比賽，真的受益良多！」— 王先生</p>
      <p>「教學系統化，讓我可以針對不足的地方加強，非常推薦！」— 陳小姐</p>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  background: linear-gradient(to right, #005bbb, #003366);
  color: white;
  text-align: center;
  padding: 60px 20px;
}
.hero h1 {
  font-size: 36px;
  font-weight: bold;
}
.hero p {
  font-size: 18px;
  margin: 10px 0;
}
.cta-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 24px;
  background: #ffcc00;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
}

/* Featured Courses */
.featured-courses {
  padding: 40px 20px;
  text-align: center;
  background: #f4f4f4;
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
}
.course-card h3 {
  color: #005bbb;
}

/* Video Section */
.video-section {
  padding: 40px 20px;
}
.video-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.video-card {
  width: 320px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.video-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Testimonials */
.testimonials {
  background: #222;
  color: white;
  text-align: center;
  padding: 40px 20px;
}
.testimonials h2 {
  color: #ffcc00;
}
.testimonials p {
  font-style: italic;
  margin: 10px auto;
  max-width: 600px;
}
</style>
