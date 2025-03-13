<template>
  <nav :class="['fixed top-0 w-full z-50 transition-all rounded-b-lg', isScrolled ? 'bg-gradient-to-r from-white to-gray-100 shadow-lg' : 'bg-transparent']">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-gray-800">🏸 羽毛球自學之路</a>
      
      <!-- Horizontal Navigation with Increased Spacing -->
      <div class="hidden md:flex space-x-16 text-gray-700 font-medium">
        <router-link v-for="item in navItems" :key="item.name" :to="item.path"
          class="relative py-2 px-8 hover:text-blue-600 transition duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          active-class="text-blue-600 font-bold after:w-full">
          {{ item.label }}
        </router-link>
      </div>
      
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide">
      <div v-if="menuOpen" class="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full rounded-b-lg">
        <router-link v-for="item in navItems" :key="item.name" :to="item.path"
          class="block py-3 px-6 text-gray-700 hover:bg-blue-100 rounded-lg transition"
          active-class="bg-blue-200 font-bold"
          @click="toggleMenu">
          {{ item.label }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isScrolled = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Detect scroll position
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Navigation items
const navItems = ref([
  { name: "home", label: "🏠 首頁", path: "/" },
  { name: "about", label: "👨‍🏫 關於我們", path: "/about" },
  { name: "courses", label: "📚 課程總覽", path: "/courses" },
  { name: "videos", label: "📺 自學影片", path: "/videos" },
  { name: "articles", label: "📖 技術文章", path: "/articles" }
]);
</script>

<style scoped>
nav {
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Slide effect for mobile menu */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.3s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  max-height: 0;
  overflow: hidden;
}

.slide-enter-to, .slide-leave-from {
  max-height: 200px;
}
</style>