<script setup lang="ts">
import { useRouter } from 'vue-router';
import {posts} from "../store.ts";

const router = useRouter();

const goToNewPost = () => {
  router.push({ name: 'NewPost' });
};

const goToProfile = (author: string, event: MouseEvent) => {
  event.stopPropagation(); // Prevent the post click event from firing
  router.push({ name: 'Profile', params: { author } });
};

const goToPost = (id: number, author: string) => {
  router.push({ name: 'Post', params: { author, id } });  // Use the id and author from the post
};

// Dummy connect function
const connect = () => {
  alert('Connect button clicked!');
};
</script>

<template>
  <div class="content">
    <button @click="connect" class="connect-button">Connect</button>
    <h1>neXchat</h1>

    <button @click="goToNewPost" class="new-post-button">New Post</button>

    <div v-for="(post, index) in posts" :key="index" class="message-box" @click="goToPost(post.id, post.author)" style="cursor: pointer;">
      <div class="message-header">
        <span class="author-link" @click="goToProfile(post.author, $event)">
          {{ post.author }}
        </span>
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
  position: relative; /* Required for absolute positioning of the button */
}

.connect-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #fff;
  color: #007bff;
  padding: 10px 20px;
  font-size: 1em;
  border: 1px solid #007bff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.connect-button:hover {
  background-color: #007bff;
  color: #fff;
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
  margin-bottom: 20px;
  max-width: 500px;
  width: 100%;
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
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides the overflow text */
  text-overflow: ellipsis; /* Displays an ellipsis (...) where the text is cut off */
  max-width: 100%; /* Ensures it doesn't exceed the container width */
}

.author-link {
  font-weight: bold;
  color: #555;
  cursor: pointer;
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides the overflow text */
  text-overflow: ellipsis; /* Displays an ellipsis (...) where the text is cut off */
  max-width: 100%; /* Ensures it doesn't exceed the container width */
}

.author-link:hover {
  color: #0056b3;
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