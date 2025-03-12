<template>
  <div id="app">
    <!-- Navigation -->
    <nav>
      <ul>
        <li><router-link to="/">🏠 首頁</router-link></li>
        <li><router-link to="/about">👨‍🏫 關於我們</router-link></li>
        <li><router-link to="/courses">📚 課程總覽</router-link></li>
        <li><router-link to="/videos">📺 自學影片</router-link></li>
        <li><router-link to="/articles">📖 技術文章</router-link></li> <!-- ✅ Updated -->
      </ul>
    </nav>

    <!-- Router View -->
    <router-view />

    <!-- Footer -->
    <footer>
      <p>© 2024 羽毛球自學之路 | <router-link to="/articles">技術文章</router-link></p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  background: #007bff;
  padding: 10px;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}

footer {
  background: #f8f8f8;
  text-align: center;
  padding: 10px;
  margin-top: auto;
}
</style>
