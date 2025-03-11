<template>
  <div class="container">
    <h1 class="title">🏸 羽毛球課程總覽</h1>
    
    <section class="pricing">
      <h2>📌 課程收費方式</h2>
      <p>教練費用 = 鐘點費 + 場地費，學生人數去均攤 ( 鐘點費 + 場地費 )</p>
      <h3>鐘點費</h3>
      <ul>
        <li>1對1~2：每小時收費800元</li>
        <li>1對3~4：每小時收費900元</li>
        <li>1對4~6：每小時收費1000元</li>
      </ul>
      <h3>場地費 - 奧創土城館羽球場</h3>
      <ul>
        <li>週一至週五 9:00 ~ 18:00：每小時450元</li>
        <li>週一至週五 18:30 ~ 22:30：每小時800元</li>
        <li>週六至週日 8:00 ~ 12:00：每小時500元</li>
        <li>週六至週日 12:00 ~ 22:00：每小時700元</li>
      </ul>
      <p>季租享8折優惠，年租享7折優惠</p>
      <h3>費用範例</h3>
      <p>星期六早上8~10、1對2、2小時</p>
      <p>總費用 = 800(鐘點費)×2 + 500(場地費)×2 = 2600元</p>
      <p>每人均分的費用 = 2600 / 2 = 1300元</p>
    </section>
    
    <section class="course-section">
      <h2>初階課程</h2>
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
      <img src="/badminton-beginner.jpg" alt="羽毛球初階課程" class="course-image">
    </section>
    
    <section class="course-section">
      <h2>中階課程</h2>
      <p>適合有基礎的球友，強調擊球準確性、步法流暢度與戰術運用。</p>
      <ul>
        <li>正手/反手進階擊球技巧</li>
        <li>防守與接殺</li>
        <li>網前處理與對角球</li>
        <li>步法強化：H型、米字型</li>
        <li>雙打戰術與站位</li>
        <li>單、雙打戰術分析</li>
      </ul>
      <img src="/badminton-intermediate.jpg" alt="羽毛球中階課程" class="course-image">
    </section>
    
    <section class="course-section">
      <h2>高階課程</h2>
      <p>專為進階選手設計，涵蓋攻防策略、時間差與心理戰技巧。</p>
      <ul>
        <li>快速高遠球與停拍技巧</li>
        <li>單腳/雙腳起跳殺球</li>
        <li>變線與假動作</li>
        <li>心理戰與對手能力測試</li>
        <li>步法強化：進攻/防守啟動步</li>
      </ul>
      <img src="/badminton-advanced.jpg" alt="羽毛球高階課程" class="course-image">
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
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.title {
  text-align: center;
  color: #005bbb;
}
.course-section {
  background: #f4f4f4;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
}
.course-section h2 {
  color: #333;
}
.course-section ul {
  list-style: none;
  padding: 0;
}
.course-section li {
  padding: 5px 0;
}
.course-image {
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
}
.contact {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background: #e0f7fa;
  border-radius: 10px;
}
.cta-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
}
.cta-btn:hover {
  background-color: #0056b3;
}
</style>
