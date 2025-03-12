<template>
  <div class="container">
    <!-- Sticky Navigation -->
    <header class="header">
      <nav class="nav-container">
        <h1 class="logo">🏸羽毛球自學之路</h1>
        <ul class="nav-links" :class="{ 'open': menuOpen }">
          <li :class="{ active: isActive('/') }"><router-link to="/">首頁</router-link></li>
          <li :class="{ active: isActive('/courses') }"><router-link to="/courses">課程</router-link></li>
          <li :class="{ active: isActive('/videos') }"><router-link to="/videos">看影片自學</router-link></li>
          <li :class="{ active: isActive('/about') }"><router-link to="/about">關於我們</router-link></li>
          <li :class="{ active: isActive('/contact') }"><router-link to="/contact">聯絡我們</router-link></li>
          <li><router-link to="/login" class="cta-btn">登入</router-link></li>
        </ul>
        <button class="menu-toggle" @click="toggleMenu">☰</button>
      </nav>
    </header>

    <router-view /> <!-- Dynamic page switching -->
ddddd
    <!-- Back to Top Button -->
    <button v-show="showButton" @click="scrollToTop" class="back-to-top">⬆ 回到頂部</button>
    
    <!-- Back to Home Button (mobile only) -->
    <button v-show="isMobile && !isHomePage" @click="goToHome" class="back-to-home">🏠 返回首頁</button>

    <footer class="footer">
      <p>© 2025 羽毛球自學之路 | 版權所有</p>
      <router-link to="/" class="home-link">返回首頁</router-link>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const menuOpen = ref(false);
    const showButton = ref(false);
    const isMobile = ref(window.innerWidth <= 768);
    const currentPageIndex = ref(0);
    const route = useRoute();
    const router = useRouter();

    // Define pages array for navigation
    const pages = [
      { path: '/', title: '羽毛球自學之路 - 首頁' },
      { path: '/courses', title: '羽毛球自學之路 - 課程總覽' },
      { path: '/videos', title: '羽毛球自學之路 - 看影片自學' },
      { path: '/about', title: '羽毛球自學之路 - 關於我們' },
      { path: '/contact', title: '羽毛球自學之路 - 聯絡我們' },
    ];

    const isHomePage = computed(() => {
      return route.path === '/';
    });

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const isActive = (path) => {
      return route.path === path;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const handleScroll = () => {
      showButton.value = window.scrollY > 300;
      
      // Mobile page navigation when scrolling to bottom
      if (isMobile.value) {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition >= document.body.offsetHeight - 50) {
          // Find current page index
          const currentPath = route.path;
          const index = pages.findIndex(page => page.path === currentPath);
          if (index !== -1) {
            // Navigate to next page
            const nextIndex = (index + 1) % pages.length;
            const nextPage = pages[nextIndex];
            router.push(nextPage.path);
            document.title = nextPage.title;
            window.scrollTo({ top: 0, behavior: 'auto' });
          }
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const goToHome = () => {
      router.push('/');
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      
      // Set current page index based on initial route
      const currentPath = route.path;
      currentPageIndex.value = pages.findIndex(page => page.path === currentPath);
      if (currentPageIndex.value === -1) currentPageIndex.value = 0;
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });

    return { 
      menuOpen, 
      toggleMenu, 
      showButton, 
      scrollToTop, 
      isActive, 
      isMobile, 
      isHomePage, 
      goToHome 
    };
  },
};
</script>

<style scoped>
/* Keep existing styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: sticky;
  top: 0;
  background-color: #2c3e50;
  color: #fff;
  padding: 15px 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 25px;
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

.nav-links .active a {
  background-color: #ffcc00;
  color: #2c3e50;
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

.back-to-top {
  position: fixed;
  bottom: 90px;
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
  z-index: 100;
}

.back-to-home {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #ffcc00;
  color: black;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 100;
}

.back-to-top:hover {
  background: #3498db;
}

.back-to-home:hover {
  background: #e6b800;
}

.footer {
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: auto;
  font-size: 14px;
}

.footer .home-link {
  display: block;
  margin-top: 10px;
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;
}

.footer .home-link:hover {
  text-decoration: underline;
}

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
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 10px;
    display: block;
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