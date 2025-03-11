<template>
    <div class="contact-page">
      <h1>聯絡我們的方法</h1>
      <p>如果您有任何問題或建議，請通過以下方式聯繫我們：</p>
      <p>Email: <a href="mailto:linwenchin@gmail.com">linwenchin@gmail.com</a></p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact"
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 18px;
    margin: 10px 0;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  