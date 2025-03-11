<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="section hero">
      <h2>🏸 關於我們</h2>
      <p>我們幫助社會組球員系統化學習羽球，突破技術瓶頸！</p>
    </section>

    <!-- Our Story -->
    <section class="section our-story">
      <div class="content">
        <h3>📖 我們的故事</h3>
        <p>
          20 多年來，我們熱愛羽毛球，也深刻體會社會組球員的學習困境。
          我們沒有科班的肌力訓練，也沒有足夠的時間每天長時間練習，
          但這不代表我們無法變強！🎯
        </p>
        <p>
          我們以 **工程師的思維** 研究羽毛球技術，並結合科學訓練方法，系統性拆解動作，
          幫助社會組球員掌握正確的技術，突破學習停滯期！
        </p>
      </div>
      <img src="/badminton-training.jpg" alt="社會組球員羽毛球訓練" class="story-image" />
    </section>

    <!-- Our Mission -->
    <section class="section our-mission">
      <h3>🎯 我們的使命</h3>
      <ul>
        <li>幫助社會組球員 **突破技術平原**</li>
        <li>透過 **系統化訓練** 提升技巧</li>
        <li>**降低受傷風險**，確保長期進步</li>
      </ul>
    </section>

    <!-- Achievements -->
    <section class="section achievements">
      <h3>🏆 競賽成就</h3>
      <ul>
        <li>2024 清晨盃混齡 100 歲組 混雙 **甲組銀牌**</li>
        <li>2022 清晨盃混齡 100 歲組 混雙 **乙組金牌**</li>
        <li>2020 清晨盃 45 歲乙組 混雙 **銅牌**</li>
        <li>2019 清晨盃 45 歲乙組 混雙 **銅牌**</li>
      </ul>
    </section>

    <!-- Contact Us -->
    <section class="section contact">
      <h3>📩 聯絡我們</h3>
      <p>有任何問題或羽球教學邀約，歡迎聯繫我們！</p>
      <a href="https://lin.ee/dcqzudR" class="cta-btn">加入我們的 Line 官方帳號</a>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: "About",
  setup() {
    onMounted(() => {
      document.title = '關於我們 - 羽毛球自學之路';
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '了解羽毛球自學之路的使命與故事，幫助社會組球員突破技術瓶頸。';
      document.head.appendChild(meta);
    });
  },
};
</script>

<style scoped>
.about-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px 20px;
}

/* General Section Styling */
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
}

/* Our Story */
.our-story {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.our-story .content {
  max-width: 60%;
}
.our-story h3 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 15px;
}
.our-story p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}
.story-image {
  width: 35%;
  max-width: 400px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.story-image:hover {
  transform: scale(1.05);
}

/* Our Mission */
.our-mission {
  background: #f4f4f4;
  text-align: center;
}
.our-mission h3 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 15px;
}
.our-mission ul {
  list-style: none;
  padding: 0;
}
.our-mission li {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}
.our-mission li:before {
  content: "✅";
  position: absolute;
  left: 0;
}

/* Achievements */
.achievements {
  text-align: center;
}
.achievements h3 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 15px;
}
.achievements ul {
  list-style: none;
  padding: 0;
}
.achievements li {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}
.achievements li:before {
  content: "🏅";
  position: absolute;
  left: 0;
}

/* Contact Section */
.contact {
  text-align: center;
  background: #222;
  color: white;
}
.contact h3 {
  font-size: 28px;
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
  .our-story {
    flex-direction: column;
    text-align: center;
  }
  .our-story .content {
    max-width: 100%;
  }
  .story-image {
    width: 100%;
    max-width: 320px;
    margin-top: 20px;
  }
  .our-mission h3,
  .achievements h3,
  .contact h3 {
    font-size: 24px;
  }
  .our-mission li,
  .achievements li,
  .contact p {
    font-size: 14px;
  }
}
</style>