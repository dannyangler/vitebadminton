<script setup>
import { ref } from 'vue';

// Contact form data
const form = ref({
  name: '',
  email: '',
  message: '',
});

const sendMessage = () => {
  alert(`Thank you, ${form.value.name}! Your message has been sent.`);
  form.value = { name: '', email: '', message: '' }; // Reset form after submission
};
</script>

<template>
  <div class="about-container">
    <!-- Introduction Section -->
    <section class="intro">
      <h1>🏸 簡介</h1>
      <p>
        <strong>希望能不斷自我成長的社會組球員🏸</strong>
      </p>
      <p>
        社會組打了二十多年羽毛球，身為社會組該碰到的羽球大小問題也差不多都經歷過了! 
        現在也還帶領著一支球隊。一路上就是用一套工程師的方法在自我練習、驗證與研究羽毛球，因此深深了解社會組球員的痛，
        我們沒有科班的肌力，也沒有那麼長的訓練時間! 該如何系統性地變強呢? 
      </p>
      <p>
        出門比賽偏偏很多時候對手又是科班生。在這個頻道，我將分享社會組如何有效變強的方法，
        以及如何避開許多社會組常見的誤區! 許多球友因為基本動作不對，早早進入技術平原期，無法持續進步。
        更有不少人學錯方法，導致運動傷害，真的太可惜了! 
      </p>
      <p>
        **希望你會喜歡這個頻道，也歡迎來信或留言交流。**
      </p>
    </section>

    <!-- Achievements Section -->
    <section class="achievements">
      <h2>🏆 社會組成績</h2>
      <ul>
        <li>2024 清晨盃混齡100歲組 混雙 甲組 銀牌</li>
        <li>2022 清晨盃混齡100歲組 混雙 乙組 金牌</li>
        <li>2020 清晨盃45歲乙組 混雙 銅牌</li>
        <li>2019 清晨盃45歲乙組 混雙 銅牌</li>
      </ul>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="about-content">
        <img src="/images/coach.jpg" alt="Coach Image" class="about-image" />
        <div class="about-text">
          <h2>🏸 關於我們</h2>
          <p>
            歡迎來到 <strong>羽毛球自學之路</strong>，我們的目標是幫助各級球員提升羽球技術，
            無論是新手還是進階選手，都能透過我們的課程與教學內容更上一層樓。
          </p>
          <p>
            我們的教練擁有超過 <strong>20 年的經驗</strong>，長年參與業餘賽事，並專精於
            <strong>個人技巧調整、戰術訓練與比賽心理調適</strong>，確保每位學員都能夠有效進步。
          </p>
        </div>
      </div>
    </section>

    <!-- Contact & Social Links -->
    <section class="contact">
      <h2>📩 聯絡我們</h2>
      <p>羽球教學邀約可透過 <a href="https://lin.ee/dcqzudR" target="_blank">Line官方帳號</a></p>
      <p>
        <a href="https://www.youtube.com/channel/UCuwjtXbJfKZBj9gXHZs_kSA?sub_confirmation=1" target="_blank">
          🎥 訂閱 YouTube 頻道
        </a>
      </p>
      <p>
        <a href="https://www.facebook.com/profile.php?id=61559548626997" target="_blank">
          👍 追蹤 Facebook
        </a>
      </p>

      <!-- Contact Form -->
      <form @submit.prevent="sendMessage" class="contact-form">
        <label for="name">姓名</label>
        <input type="text" id="name" v-model="form.name" required />

        <label for="email">電子郵件</label>
        <input type="email" id="email" v-model="form.email" required />

        <label for="message">訊息</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>

        <button type="submit" class="submit-btn">送出訊息</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
/* Container */
.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

/* Intro Section */
.intro, .achievements {
  background: #ffffff;
  padding: 30px;
  text-align: center;
}

.intro h1, .achievements h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.achievements ul {
  list-style: none;
  padding: 0;
}

.achievements li {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

/* About Section */
.about {
  background: #f9f9f9;
  padding: 40px 20px;
  border-radius: 10px;
  text-align: center;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
}

.about-image {
  width: 40%;
  max-width: 300px;
  border-radius: 10px;
}

.about-text {
  flex: 1;
  text-align: left;
}

.about-text h2 {
  font-size: 24px;
}

.about-text p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

/* Contact Section */
.contact {
  margin-top: 40px;
  text-align: center;
}

.contact h2 {
  font-size: 24px;
}

.contact a {
  display: block;
  font-size: 16px;
  margin: 10px 0;
  color: #007bff;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
}

label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.submit-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background: #0056b3;
}
</style>
