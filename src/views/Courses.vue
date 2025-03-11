<template>
  <div class="courses-container">
    <!-- Title Section -->
    <section class="section title-section">
      <h2>🏸 羽毛球課程總覽</h2>
    </section>

    <!-- Pricing Section -->
    <section class="section pricing">
      <h3>📌 課程收費方式</h3>
      <p>教練費用 = 鐘點費 + 場地費，學生人數去均攤 (鐘點費 + 場地費)</p>
      <h4>鐘點費</h4>
      <ul>
        <li>1對1~2：每小時收費800元</li>
        <li>1對3~4：每小時收費900元</li>
        <li>1對4~6：每小時收費1000元</li>
      </ul>
      <h4>場地費 - 奧創土城館羽球場</h4>
      <ul>
        <li>週一至週五 9:00 ~ 18:00：每小時450元</li>
        <li>週一至週五 18:30 ~ 22:30：每小時800元</li>
        <li>週六至週日 8:00 ~ 12:00：每小時500元</li>
        <li>週六至週日 12:00 ~ 22:00：每小時700元</li>
      </ul>
      <p>季租享8折優惠，年租享7折優惠</p>
      <h4>費用範例</h4>
      <p>星期六早上8~10、1對2、2小時</p>
      <p>總費用 = 800(鐘點費)×2 + 500(場地費)×2 = 2600元</p>
      <p>每人均分的費用 = 2600 / 2 = 1300元</p>
    </section>

    <!-- Beginner Course -->
    <section class="section course-section">
      <h3>初階課程</h3>
      <p>適合初學者，涵蓋基本握拍、發力、步法與基礎技術。</p>
      <ul>
        <li>握拍、基本發力原理、平球</li>
        <li>正反拍發長短球+小球</li>
        <li>正拍引拍到位、長球</li>
        <li>啟動原理、前後步伐</li>
        <li>前場V字步伐</li>
        <li>接殺球</li>
        <li>後場V字步伐</li>
        <li>反拍原理、平球</li>
        <li>正拍殺球</li>
        <li>正拍切球</li>
        <li>正反手挑球</li>
        <li>單、雙打規則與零打準備</li>
      </ul>
      <img src="/badminton-beginner.jpg" alt="初階羽毛球課程訓練" class="course-image" />
      <router-link to="/contact" class="course-cta">報名初階課程</router-link>
    </section>

    <!-- Intermediate Course -->
    <section class="section course-section">
      <h3>中階課程</h3>
      <p>適合有基礎的球友，強調擊球準確性、步法流暢度與戰術運用。</p>
      <ul>
        <li>正手/反手進階擊球技巧</li>
        <li>防守與接殺</li>
        <li>網前處理與對角球</li>
        <li>步法強化：H型、米字型</li>
        <li>雙打戰術與站位</li>
        <li>單、雙打戰術分析</li>
      </ul>
      <img src="/badminton-intermediate.jpg" alt="中階羽毛球戰術訓練" class="course-image" />
      <router-link to="/contact" class="course-cta">報名中階課程</router-link>
    </section>

    <!-- Advanced Course -->
    <section class="section course-section">
      <h3>高階課程</h3>
      <p>專為進階選手設計，涵蓋攻防策略、時間差與心理戰技巧。</p>
      <ul>
        <li>快速高遠球與停拍技巧</li>
        <li>單腳/雙腳起跳殺球</li>
        <li>變線與假動作</li>
        <li>心理戰與對手能力測試</li>
        <li>步法強化：進攻/防守啟動步</li>
      </ul>
      <img src="/badminton-advanced.jpg" alt="高階羽毛球進攻訓練" class="course-image" />
      <router-link to="/contact" class="course-cta">報名高階課程</router-link>
    </section>

    <!-- Contact Section -->
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
  name: "Courses",
  setup() {
    onMounted(() => {
      document.title = '課程總覽 - 羽毛球自學之路';
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '探索羽毛球初階、中階、高階課程與收費詳情，適合社會組球員提升技術。';
      document.head.appendChild(meta);
    });
  },
};
</script>

<style scoped>
.courses-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px 20px;
}

/* General Section Styling */
.section {
  padding: 30px 20px;
  margin-bottom: 30px;
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

/* Headings */
.title-section h2 {
  font-size: 32px;
  color: #005bbb;
  text-align: center;
}

h3 {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 15px;
}

h4 {
  font-size: 20px;
  color: #333;
  margin: 15px 0 10px;
}

/* Text and Lists */
p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 16px;
  padding: 5px 0;
  position: relative;
  padding-left: 20px;
}

li:before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: 0;
}

/* Images */
.course-image {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin-top: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease;
}
.course-image:hover {
  transform: scale(1.05);
}

/* CTAs */
.course-cta {
  display: inline-block;
  margin-top: 15px;
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

.cta-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.cta-btn:hover {
  background-color: #0056b3;
}

/* Contact Section */
.contact {
  text-align: center;
  background: #e0f7fa;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section {
    padding: 20px 15px;
    margin-bottom: 20px;
  }
  .title-section h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 18px;
  }
  p, li {
    font-size: 14px;
  }
  .course-image {
    max-width: 100%;
  }
}
</style>