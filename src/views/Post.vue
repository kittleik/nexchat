<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {posts} from "../store.ts";

const route = useRoute();
const postIdParam = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const postId = parseInt(postIdParam, 10);
const author = route.params.author;

const post = ref(posts.value.find(p => p.id === postId && p.author === author) || { author: '', content: '', timestamp: '' });
</script>

<template>
  <div class="content">
    <div class="post-container">
      <h2>Post by {{ post.author }}</h2>
      <div class="message-box">
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
  </div>
</template>

<style scoped>
.content {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #fff;
}

.post-container {
  max-width: 500px;
  width: 100%;
}

.message-box {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px 20px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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