<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const articles = ref([]);
const loading = ref(true);

const fetchArticles = async () => {
  console.log("Fetching articles from Supabase...");
  try {
    const { data, error } = await supabase
      .from("articles")
      .select("id, title, summary, cover_image_url, created_at")
      .order("created_at", { ascending: false });

    if (error) throw error;
    articles.value = data;
    console.log("Articles fetched successfully:", data);
  } catch (err) {
    console.error("Error fetching articles:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchArticles);
</script>

<template>
  <div class="articles-container max-w-4xl mx-auto p-6">
    <h1 class="text-2xl font-bold text-center mb-6">📖 技術文章</h1>
    <div v-if="loading" class="text-center text-gray-500">⏳ Loading articles...</div>
    <div v-else-if="articles.length" class="flex flex-col gap-4">
      <div v-for="article in articles" :key="article.id" class="article-card bg-white shadow-sm rounded-lg overflow-hidden flex items-center gap-4">
        <div class="image-container w-24 h-24 flex-shrink-0">
          <img v-if="article.cover_image_url" 
               :src="article.cover_image_url" 
               alt="封面圖片" 
               class="article-image">
        </div>
        <div class="content-container py-2 flex-1">
          <h2 class="text-md font-semibold text-gray-800">{{ article.title }}</h2>
          <p class="text-sm text-gray-500 mt-2">{{ article.summary }}</p>
          <router-link :to="`/articles/${article.id}`" class="text-green-500 hover:underline block mt-4">閱讀更多 ➜</router-link>
        </div>
      </div>
    </div>
    <p v-else class="text-center text-gray-500">❌ No articles found. Please add some articles in Supabase.</p>
  </div>
</template>

<style scoped>
.articles-container {
  background: #f9f9f9;
  padding: 20px;
}
.article-card {
  transition: transform 0.2s;
  display: flex;
  flex-direction: row;
}
.article-card:hover {
  transform: translateY(-5px);
}

/* ✅ Ensure images scale correctly for both desktop and mobile */
.image-container {
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Ensure images are consistently scaled */
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ✅ Adjust image size based on screen size */
@media (min-width: 1024px) {
  .article-image {
    max-height: 200px;
  }

  .image-container {
    width: 64px;
    height: 64px;
  }
}

@media (min-width: 1024px) {
  .article-card {
    align-items: center;
  }
}
</style>
