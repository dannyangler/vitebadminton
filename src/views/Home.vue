<template>
  <section class="hero" id="home">
    <img src="/images/badminton-hero.jpg" alt="Badminton Hero" class="hero-image">
    <div class="hero-content">
      <h1>提升你的羽毛球技術</h1>
      <p>探索各種課程，讓你的技術更進一步！</p>
      <router-link to="/courses" class="cta-button">開始學習</router-link>
    </div>
  </section>
  
  <section class="content-section" id="courses">
    <h2>課程總覽</h2>
    <Courses />
  </section>
  
  <section class="content-section" id="about">
    <h2>關於我們</h2>
    <About />
  </section>
  
  <section class="content-section" id="articles">
    <h2>技術文章</h2>
    <Articles />
  </section>
  
  <section class="content-section" id="videos">
    <h2>自學影片</h2>
    <VideoSelfStudy />
  </section>
  
  <section class="content-section" id="contact">
    <h2>聯繫我們</h2>
    <Contact />
  </section>
</template>

<script setup>
import Courses from "@/views/Courses.vue";
import About from "@/views/About.vue";
import Articles from "@/views/Articles.vue";
import VideoSelfStudy from "@/views/VideoSelfStudy.vue";
import Contact from "@/views/Contact.vue";
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.hero-image {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain; /* Ensure aspect ratio is maintained on PC */
}

.hero-content {
  position: absolute;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  padding: 20px;
}

.cta-button {
  background: #ffcc00;
  color: black;
  padding: 12px 20px;
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
}

.cta-button:hover {
  background: #e6b800;
}

.content-section {
  padding: 60px 20px;
  text-align: center;
  background: #f9f9f9;
  margin-top: 20px;
}

/* Responsive design for mobile */
@media (max-width: 768px) {
  .hero-image {
    max-height: 400px;
    object-fit: cover; /* Allow image to fit in mobile view */
  }
}
</style>