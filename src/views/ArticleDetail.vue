<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import { marked } from 'marked'; // ✅ Import Markdown parser

// Initialize Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Get route parameters
const route = useRoute();
const article = ref(null);
const loading = ref(true);
const errorMsg = ref("");

// Fetch the article details based on the ID from the URL
const fetchArticle = async () => {
  try {
    console.log("Fetching article with ID:", route.params.id);
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("id", route.params.id)
      .single();

    if (error) {
      throw error;
    }

    article.value = data;
    console.log("Article data:", data);
  } catch (err) {
    console.error("Error fetching article:", err);
    errorMsg.value = "❌ 找不到這篇文章，請確認文章是否存在。";
  } finally {
    loading.value = false;
  }
};

// ✅ Convert Markdown to HTML safely
const formattedContent = computed(() => {
  return article.value ? marked(article.value.content) : '';
});

onMounted(fetchArticle);
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <div v-if="loading" class="text-center text-gray-500">⏳ Loading article...</div>

    <div v-else-if="article" class="article-detail">
      <h1 class="text-3xl font-bold text-gray-800">{{ article.title }}</h1>
      <p class="text-gray-500">{{ new Date(article.created_at).toLocaleDateString() }}</p>
      
      <div class="article-content-wrapper">
        <div class="image-container">
          <img v-if="article.cover_image_url" :src="article.cover_image_url" alt="封面圖片" class="article-image">
        </div>
        <div class="article-text">
          <div v-html="formattedContent" class="article-content"></div>
        </div>
      </div>
      
      <router-link to="/articles" class="text-green-500 hover:underline block mt-6">
        ⬅ 返回文章列表
      </router-link>
    </div>

    <p v-else class="text-center text-red-500">{{ errorMsg }}</p>
  </div>
</template>

<style scoped>
.article-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* ✅ Image placement on PC */
@media (min-width: 1024px) {
  .article-content-wrapper {
    flex-direction: row;
    align-items: flex-start;
  }
  .image-container {
    flex: 0 0 40%; /* ✅ Image takes 40% width on PC */
    max-width: 350px;
    margin-right: 20px;
  }
  .article-text {
    flex: 1;
  }
}

.image-container {
  width: 100%;
  max-width: 600px; /* ✅ Restrict max width on larger screens */
  margin-bottom: 20px;
}

.article-image {
  width: 100%;
  height: auto;
  max-height: 300px; /* ✅ Limit height on larger screens */
  object-fit: contain; /* ✅ Maintain aspect ratio without cropping */
  border-radius: 8px;
}

/* ✅ On mobile, the image is full width on top */
@media (max-width: 1024px) {
  .image-container {
    max-width: 100%;
  }
  .article-image {
    max-height: none;
  }
}
</style>