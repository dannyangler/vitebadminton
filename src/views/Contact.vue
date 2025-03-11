<template>
    <div class="contact-container">
      <!-- Introduction Section -->
      <section class="section intro">
        <h2>聯絡我們</h2>
        <p>如果您有任何問題或建議，請通過以下方式聯繫我們。我們很高興能協助您！</p>
      </section>
  
      <!-- Contact Method Section -->
      <section class="section contact-method">
        <h3>聯絡方式</h3>
        <p>Email: <a href="mailto:linwenchin@gmail.com">linwenchin@gmail.com</a></p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 20px 20px; /* Top padding for sticky header from App.vue */
  }
  
  /* General Section Styling */
  .section {
    padding: 30px 20px;
    margin-bottom: 30px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  /* Subtle Divider */
  .section:not(:last-child)::after {
    content: "";
    display: block;
    width: 50%;
    margin: 20px auto 0;
    border-bottom: 1px solid #ddd;
  }
  
  /* Headings */
  h2 {
    font-size: 28px;
    color: #2c3e50; /* Matches App.vue header */
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 22px;
    color: #005bbb; /* Matches Courses.vue title */
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