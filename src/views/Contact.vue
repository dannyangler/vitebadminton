<template>
    <div class="contact-container">
      <!-- Introduction Section -->
      <section class="section intro">
        <h2>聯絡我們</h2>
        <p>如果您有任何問題、建議或教學邀約，請通過以下方式聯繫我們。我們很高興能協助您！</p>
      </section>
  
      <!-- Contact Methods Section -->
      <section class="section contact-methods">
        <h3>聯絡方式</h3>
        <p>Email: <a href="mailto:linwenchin@gmail.com">linwenchin@gmail.com</a></p>
        <p>Line: <a href="https://lin.ee/dcqzudR" target="_blank">加入我們的 Line 官方帳號</a></p>
        <p>電話: 待定 (敬請期待！)</p>
        <a href="https://lin.ee/dcqzudR" class="cta-btn">立即聯繫</a>
      </section>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  
  export default {
    name: "Contact",
    setup() {
      onMounted(() => {
        document.title = '聯絡我們 - 羽毛球自學之路';
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = '聯繫羽毛球自學之路團隊，獲取課程資訊或提出建議。';
        document.head.appendChild(meta);
      });
    },
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 20px 20px;
  }
  
  /* General Section Styling */
  .section {
    padding: 30px 20px;
    margin-bottom: 30px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
  }
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
  
  /* Subtle Divider */
  .section:not(:last-child)::after {
    content: "";
    display: block;
    width: 50%;
    margin: 20px auto 0;
    border-bottom: 1px dashed #3498db;
  }
  
  /* Headings */
  h2 {
    font-size: 28px;
    color: #2c3e50;
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 22px;
    color: #005bbb;
    margin-bottom: 15px;
  }
  
  /* Paragraphs and Links */
  p {
    font-size: 18px;
    color: #555;
    margin: 10px 0;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #2980b9;
    text-decoration: underline;
  }
  
  /* CTA Button */
  .cta-btn {
    display: inline-block;
    padding: 10px 20px;
    background: #ffcc00;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 15px;
    transition: background-color 0.3s ease;
  }
  
  .cta-btn:hover {
    background: #e6b800;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .section {
      padding: 20px 15px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
  </style>