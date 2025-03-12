<script setup>
</script>

<template>
  <div class="articles-container">
    <h1>📖 技術文章</h1>
    <p>這裡將會分享關於羽毛球的技術、訓練方法與實戰策略。</p>

    <div class="article-list">
      <div class="article-card">
        <h2>如何提升你的殺球速度？</h2>
        <p>殺球不只是靠力量，如何正確發力？如何減少動作浪費？點擊查看更多！</p>
        <button class="read-more">閱讀更多</button>
      </div>

      <div class="article-card">
        <h2>提升步法的三大關鍵技巧</h2>
        <p>掌握步法的正確節奏與重心控制，讓你在場上移動更輕鬆！</p>
        <button class="read-more">閱讀更多</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.articles-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.article-card h2 {
  font-size: 20px;
}

.article-card p {
  font-size: 16px;
  color: #555;
}

.read-more {
  margin-top: 10px;
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.read-more:hover {
  background: #0056b3;
}
</style>
