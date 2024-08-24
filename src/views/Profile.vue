<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import {posts} from "../store.ts";
import router from "../router";

const route = useRoute();
const author = ref(route.params.author);

const filteredPosts = computed(() =>
    posts.value.filter(post => post.author === author.value)
);

const goToPost = (id: number) => {
  router.push({ name: 'Post', params: { author: author.value, id } });
};
</script>

<template>
  <div class="content">
    <h2>{{ author }}'s Posts</h2>
    <div v-for="(post, index) in filteredPosts" :key="index" class="message-box" @click="goToPost(post.id)" style="cursor: pointer;">
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
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

h1 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
  color: #333;
}

.message-box {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px 20px;
  max-width: 500px;
  width: 100%;
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