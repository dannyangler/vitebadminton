<template>
    <div class="about">
      <!-- Hero Section -->
      <section class="hero">
        <h1>🏸 關於我們</h1>
        <p>我們幫助社會組球員系統化學習羽球，突破技術瓶頸！</p>
      </section>
  
      <!-- Our Story -->
      <section class="our-story">
        <div class="content">
          <h2>📖 我們的故事</h2>
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
        <img src="/badminton-training.jpg" alt="羽毛球訓練">
      </section>
  
      <!-- Our Mission -->
      <section class="our-mission">
        <h2>🎯 我們的使命</h2>
        <ul>
          <li>✅ 幫助社會組球員 **突破技術平原**</li>
          <li>✅ 透過 **系統化訓練** 提升技巧</li>
          <li>✅ **降低受傷風險**，確保長期進步</li>
        </ul>
      </section>
  
      <!-- Achievements -->
      <section class="achievements">
        <h2>🏆 競賽成就</h2>
        <ul>
          <li>🥈 2024 清晨盃混齡 100 歲組 混雙 **甲組銀牌**</li>
          <li>🥇 2022 清晨盃混齡 100 歲組 混雙 **乙組金牌**</li>
          <li>🥉 2020 清晨盃 45 歲乙組 混雙 **銅牌**</li>
          <li>🥉 2019 清晨盃 45 歲乙組 混雙 **銅牌**</li>
        </ul>
      </section>
  
      <!-- Contact Us -->
      <section class="contact">
        <h2>📩 聯絡我們</h2>
        <p>有任何問題或羽球教學邀約，歡迎聯繫我們！</p>
        <a href="https://lin.ee/dcqzudR" class="cta-btn">加入我們的 Line 官方帳號</a>
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
    margin-top: 10px;
  }
  
  /* Our Story */
  .our-story {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 50px auto;
    padding: 20px;
  }
  .our-story .content {
    max-width: 60%;
  }
  .our-story h2 {
    color: #005bbb;
  }
  .our-story img {
    width: 35%;
    border-radius: 10px;
  }
  
  /* Our Mission */
  .our-mission {
    background: #f4f4f4;
    padding: 40px;
    text-align: center;
  }
  .our-mission h2 {
    color: #005bbb;
  }
  .our-mission ul {
    list-style: none;
    padding: 0;
  }
  .our-mission li {
    font-size: 18px;
    margin: 10px 0;
  }
  
  /* Achievements */
  .achievements {
    text-align: center;
    padding: 40px 20px;
  }
  .achievements h2 {
    color: #005bbb;
  }
  .achievements ul {
    list-style: none;
    padding: 0;
  }
  .achievements li {
    font-size: 18px;
    margin: 10px 0;
  }
  
  /* Contact Section */
  .contact {
    text-align: center;
    background: #222;
    color: white;
    padding: 40px 20px;
  }
  .contact h2 {
    color: #ffcc00;
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
  </style>
  