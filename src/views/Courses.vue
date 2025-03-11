<template>
    <div class="container">
      <h1 class="title">🏸 羽毛球課程總覽</h1>
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
  