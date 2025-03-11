<template>
  <div class="container">
    <!-- Sticky Navigation -->
    <header class="header">
      <nav class="nav-container">
        <h1 class="logo">🏸羽毛球自學之路</h1>
        <ul class="nav-links" :class="{ 'open': menuOpen }">
          <li :class="{ active: isActive('/') }"><router-link to="/">首頁</router-link></li>
          <li :class="{ active: isActive('/courses') }"><router-link to="/courses">課程</router-link></li>
          <li :class="{ active: isActive('/about') }"><router-link to="/about">關於我們</router-link></li>
          <li :class="{ active: isActive('/contact') }"><router-link to="/contact">聯絡我們</router-link></li>
          <li><router-link to="/login" class="cta-btn">登入</router-link></li>
        </ul>
        <button class="menu-toggle" @click="toggleMenu">☰</button>
      </nav>
    </header>

    <router-view /> <!-- Dynamic page switching -->

    <!-- Back to Top Button -->
    <button v-show="showButton" @click="scrollToTop" class="back-to-top">⬆ 回到頂部</button>

    <footer class="footer">
      <p>© 2025 羽毛球自學之路 | 版權所有</p>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  setup() {
    const menuOpen = ref(false);
    const showButton = ref(false);
    const route = useRoute();

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const isActive = (path) => {
      return route.path === path;
    };

    const handleScroll = () => {
      showButton.value = window.scrollY > 300;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { menuOpen, toggleMenu, showButton, scrollToTop, isActive };
  },
};
</script>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* Container */
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Sticky Header */
.header {
  position: sticky; /* Changed from fixed to sticky for better context */
  top: 0;
  background-color: #2c3e50;
  color: #fff;
  padding: 15px 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Navigation Container */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Limits width for better readability */
  margin: 0 auto; /* Centers the nav */
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

/* Navigation Links */
.nav-links {
  list-style-type: none;
  display: flex;
  gap: 25px; /* Slightly increased for breathing room */
}

.nav-links li {
  font-size: 18px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links a:hover {
  background-color: #3498db;
}

/* Highlight Active Page */
.nav-links .active a {
  background-color: #ffcc00; /* Changed to background for stronger visual cue */
  color: #2c3e50; /* Contrast against yellow */
}

/* Call-to-Action Button */
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

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #005bbb;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.back-to-top:hover {
  background: #ffcc00;
  color: black;
}

/* Footer */
.footer {
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: auto;
  font-size: 14px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 10px 20px;
  }

  .logo {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .nav-links {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    text-align: center;
    display: none; /* Hidden by default */
  }

  .nav-links.open {
    display: flex; /* Shown when toggled */
  }

  .nav-links a {
    padding: 10px;
    display: block; /* Full-width clickable area */
  }

  .cta-btn {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }

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