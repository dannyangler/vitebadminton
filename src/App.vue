<template>
  <div class="container">
    <header class="header">
      <nav>
        <h1 class="logo">🏸羽毛球自學之路</h1>
        <ul class="nav-links">
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/courses">課程</router-link></li>
          <li><router-link to="/about">關於我們</router-link></li>
          <li><router-link to="/contact">聯絡我們</router-link></li>
          <li><router-link to="/login" class="cta-btn">登入</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view />  <!-- 🚀 動態切換頁面 -->
    
    <footer class="footer">
      <p>&copy; 2025 羽毛球自學之路 | 版權所有</p>
    </footer>
  </div>
</template>



