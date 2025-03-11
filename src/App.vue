<template>
  <div class="container">
    <header class="header">
      <nav>
        <h1 class="logo">🏸羽毛球自學之路</h1>
        <ul class="nav-links" :class="{ 'open': menuOpen }">
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/courses">課程</router-link></li>
          <li><router-link to="/about">關於我們</router-link></li>
          <li><router-link to="/contact">聯絡我們</router-link></li>
          <li><router-link to="/login" class="cta-btn">登入</router-link></li>
        </ul>
        <button class="menu-toggle" @click="toggleMenu">☰</button>
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
  name: 'Header',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* Full height container to make the footer stick at the bottom */
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styles */
.header {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* For the mobile menu button positioning */
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

/* Footer styles */
.footer {
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: auto; /* Push footer to the bottom */
  font-size: 14px;
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 20px;
  }

  .logo {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .nav-links {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    text-align: center;
    display: none; /* Initially hide the menu */
  }

  .nav-links.open {
    display: flex; /* Show the menu when toggled */
  }

  .nav-links li {
    font-size: 18px;
  }

  .nav-links a {
    padding: 10px;
  }

  .cta-btn {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }

  /* Hamburger menu button */
  .menu-toggle {
    font-size: 30px;
    background: none;
    border: none;
    color: #fff;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>
