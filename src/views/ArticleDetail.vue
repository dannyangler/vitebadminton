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
      <img v-if="article.cover_image_url" :src="article.cover_image_url" alt="封面圖片" class="mt-4 rounded-lg w-full">
      
      <!-- ✅ Render Markdown content as HTML -->
      <div v-html="formattedContent" class="article-content mt-4"></div>

      <router-link to="/articles" class="text-green-500 hover:underline block mt-6">
        ⬅ 返回文章列表
      </router-link>
    </div>

    <p v-else class="text-center text-red-500">{{ errorMsg }}</p>
  </div>
</template>

<style scoped>
.article-content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;
}

/* ✅ Improve styling for Markdown headings */
.article-content h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.5rem;
  color: #1d4ed8;
}

.article-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #2563eb;
}

/* ✅ Style for paragraphs */
.article-content p {
  margin-bottom: 1rem;
}

/* ✅ Style for links */
.article-content a {
  color: #059669;
  text-decoration: underline;
}

.article-content a:hover {
  color: #047857;
}

/* ✅ Style for images */
.article-content img {
  max-width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
}

/* ✅ Style for lists */
.article-content ul {
  padding-left: 20px;
  list-style: disc;
}

.article-content ol {
  padding-left: 20px;
  list-style: decimal;
}

.article-content li {
  margin-bottom: 0.5rem;
}

/* ✅ Style for code blocks */
.article-content pre {
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
}

.article-content code {
  background-color: #eef;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: "Courier New", monospace;
}
</style>
