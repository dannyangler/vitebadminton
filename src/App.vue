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

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
/* Your CSS styles go here */
.header {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  font-size: 18px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-links a:hover {
  background-color: #3498db;
}

.cta-btn {
  background-color: #e74c3c;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.cta-btn:hover {
  background-color: #c0392b;
}
</style>

