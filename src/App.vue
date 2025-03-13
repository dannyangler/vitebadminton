<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-1 mt-16 p-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center p-4">
      <p>© 2024 羽毛球自學之路 | <router-link to="/articles" class="hover:underline">技術文章</router-link></p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style scoped>
/* Remove unused styles since Tailwind CSS is handling most styling */
</style>