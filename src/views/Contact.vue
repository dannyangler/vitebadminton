<template>
    <div class="contact-page">
      <h1>聯絡我們</h1>
      <p>請聯繫我們，填寫以下表格或發送電子郵件。</p>
  
      <form>
        <label for="name">名字:</label>
        <input type="text" id="name" placeholder="您的名字">
  
        <label for="email">電子郵件:</label>
        <input type="email" id="email" placeholder="您的電子郵件">
  
        <label for="message">訊息:</label>
        <textarea id="message" placeholder="您的訊息"></textarea>
  
        <button type="submit">送出</button>
      </form>
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
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 10px 0 5px;
  }
  
  input,
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  