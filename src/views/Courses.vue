<template>
  <div class="container">
    <h1 class="title">🏸 羽毛球課程總覽</h1>
    
    <section class="fee-section">
      <h2>課程收費方式</h2>
      <p>教練費用 = 鐘點費 + 場地費，學生人數均攤（鐘點費 + 場地費）</p>
      
      <h3>鐘點費</h3>
      <ul>
        <li>1對1~2：每小時收費 800 元</li>
        <li>1對3~4：每小時收費 900 元</li>
        <li>1對4~6：每小時收費 1000 元</li>
      </ul>
      
      <h3>場地費 - 奧創土城館羽球場</h3>
      <ul>
        <li>週一至週五：9:00 ~ 18:00 每小時 450 元，18:30 ~ 22:30 每小時 800 元</li>
        <li>週六至週日：8:00 ~ 12:00 每小時 500 元，12:00 ~ 22:00 每小時 700 元</li>
        <li>季租享 8 折優惠，年租享 7 折優惠</li>
      </ul>
      
      <h3>費用範例</h3>
      <p>例如：星期六早上 8:00 ~ 10:00，1 對 2，2 小時</p>
      <p>總費用 = 800(鐘點費) × 2 + 500(場地費) × 2 = 2600 元</p>
      <p>每人均分的費用 = 2600 / 2 = 1300 元</p>
    </section>
    
    <li>這是基本課表給各位參考，如果你沒有大量的練習時間，大部份的短期課程，只是能給你大約的了解一下動作長什麼樣子，
      如果沒有足夠的練習時間，很容易的就變成只是去看教練表演而已</li>
    
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
.fee-section {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
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
</style>
