<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([
  {
    author: 'nq4sq9zf0q63u5n562sask237h4tzuhkr0h4xa...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.',
    timestamp: 'August 22, 2024, 10:30 AM',
  },
]);

const router = useRouter();

const goToNewPost = () => {
  router.push({ name: 'NewPost' });
};
</script>

<template>
  <div class="content">
    <h1>neXchat</h1>

    <button @click="goToNewPost" class="new-post-button">New Post</button>

    <div v-for="(post, index) in posts" :key="index" class="message-box">
      <div class="message-header">
        <span class="author">{{ post.author }}</span>
      </div>
      <div class="message-content">
        {{ post.content }}
      </div>
      <div class="message-footer">
        <span class="timestamp">{{ post.timestamp }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  padding: 20px; /* Add padding around the content */
}

h1 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center; /* Center the title text */
}

.new-post-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;
}

.new-post-button:hover {
  background-color: #0056b3;
}

.message-box {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px 20px;
  min-width: 400px;
  max-width: 600px;
  margin-bottom: 20px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.author {
  font-weight: bold;
  color: #333;
  text-align: left;
}

.message-content {
  font-size: 1em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: left;
}

.message-footer {
  display: flex;
  justify-content: flex-end;
}

.timestamp {
  font-size: 0.85em;
  color: #999;
}
</style>