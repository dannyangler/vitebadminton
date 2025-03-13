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
      .select("*") // 選擇所有欄位，防止因缺少欄位而導致錯誤
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      return;
    }

    if (!data || data.length === 0) {
      console.warn("No articles found in the database.");
    } else {
      console.log("Articles fetched successfully:", data);
    }

    articles.value = data;
  } catch (err) {
    console.error("Unexpected error while fetching articles:", err);
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
    <div v-else-if="articles.length" class="grid md:grid-cols-2 gap-6">
      <div v-for="article in articles" :key="article.id" class="article-card bg-white shadow-md rounded-lg overflow-hidden">
        <img v-if="article.cover_image_url" :src="article.cover_image_url" alt="封面圖片" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-bold text-gray-800">{{ article.title }}</h2>
          <p class="text-gray-600 mt-2">{{ article.summary }}</p>
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
}
.article-card:hover {
  transform: translateY(-5px);
}
</style>
