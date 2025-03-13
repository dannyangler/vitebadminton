<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log("Supabase URL:", supabaseUrl); // Debug log
console.log("Supabase Key Loaded:", !!supabaseKey); // Ensure key loaded

const supabase = createClient(supabaseUrl, supabaseKey);

const articles = ref([]);
const loading = ref(true);

const fetchArticles = async () => {
  console.log("Fetching articles from Supabase..."); // Debug log before fetch
  try {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error); // Detailed Supabase error
      throw error;
    }

    console.log("Articles fetched successfully:", data); // Debug log fetched data
    articles.value = data;
  } catch (err) {
    console.error("Error during fetchArticles:", err); // General catch-all error
  } finally {
    loading.value = false;
    console.log("Loading state:", loading.value); // Check loading state
  }
};

onMounted(fetchArticles);
</script>

<template>
  <div class="articles-container">
    <h1>📖 技術文章</h1>
    <div v-if="loading">⏳ Loading articles...</div>
    <div v-else-if="articles.length">
      <div v-for="article in articles" :key="article.id" class="article-card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
      </div>
    </div>
    <p v-else>❌ No articles found. Please add some articles in Supabase.</p>
  </div>
</template>
