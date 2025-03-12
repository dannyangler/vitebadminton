<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMobile = ref(window.innerWidth <= 768);
const modalContent = ref("");
const isModalOpen = ref(false);

const openModal = (content) => {
  modalContent.value = content;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="home-container">
    <!-- Hero 區塊 -->
    <section class="hero">
      <h1>🏸 羽毛球自學之路</h1>
      <p>從入門到進階，讓你的羽球技術更上一層樓！</p>
      <button @click="openModal('立即開始你的羽球學習之旅！')" class="cta-btn">立即開始學習</button>
    </section>

    <!-- 課程總覽 -->
    <section class="section">
      <h2>🎓 課程總覽</h2>
      <p>系統化訓練，從基礎到進階，掌握核心技術。</p>
      <button @click="openModal('我們的課程涵蓋基礎技術、進階戰術與個別訓練，讓每位學員都能有效提升！')" class="btn-secondary">查看更多</button>
    </section>

    <!-- 自學影片 -->
    <section class="section">
      <h2>📺 自學影片</h2>
      <p>透過高品質教學影片，隨時隨地提升你的羽球技巧！</p>
      <button @click="openModal('我們的影片課程包含發球、步法、戰術分析等，幫助你更高效學習！')" class="btn-secondary">查看更多</button>
    </section>

    <!-- 教練理念 -->
    <section class="section">
      <h2>🧑‍🏫 教練理念</h2>
      <p>擁有 20+ 年經驗的專業教練，帶領你穩步提升。</p>
      <button @click="openModal('我們的教學核心是穩固基礎、強化技術與培養戰術思維，讓你真正成長！')" class="btn-secondary">查看更多</button>
    </section>

    <!-- 聯絡我們 -->
    <section class="section">
      <h2>📩 聯絡我們</h2>
      <p>有任何問題？我們隨時為你提供專業建議！</p>
      <button @click="openModal('歡迎與我們聯絡！無論是課程諮詢還是技術問題，我們樂意為你解答。')" class="btn-secondary">查看更多</button>
    </section>

    <!-- 行動召喚 (CTA) -->
    <section class="cta-section">
      <h2>🏆 準備好開始你的羽球進步之旅了嗎？</h2>
      <button @click="openModal('立即報名我們的課程，開啟你的羽球進階學習！')" class="cta-btn">立即報名</button>
    </section>

    <!-- 彈出視窗 -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <p>{{ modalContent }}</p>
        <button class="close-btn" @click="closeModal">關閉</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 基礎佈局 */
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Hero 區塊 */
.hero {
  background: linear-gradient(to right, #004488, #002244);
  color: white;
  text-align: center;
  padding: 60px 20px;
  border-radius: 10px;
}

.hero h1 {
  font-size: 32px;
  font-weight: bold;
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
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.cta-btn:hover {
  background: #e6b800;
}

/* 內容區塊 */
.section {
  padding: 40px 20px;
  text-align: center;
  margin-bottom: 20px;
  background: #f9f9f9;
  border-radius: 10px;
}

.section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.section p {
  font-size: 16px;
  color: #333;
}

/* 按鈕 */
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

/* 行動召喚區 */
.cta-section {
  background: #ffdd57;
  padding: 50px 20px;
  text-align: center;
  border-radius: 10px;
}

.cta-section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

/* 彈出視窗 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 80%;
}

.close-btn {
  background: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 15px;
}
</style>
