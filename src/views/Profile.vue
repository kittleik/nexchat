<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Assume this data comes from a shared store or API
const allPosts = ref([
  {
    author: 'nqtsq5g54cxvq0s536s8nhqynmk43ucyhgyezp23vh6gp9yr',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.',
    timestamp: 'August 22, 2024, 10:30 PM',
  },
  {
    author: 'nqtsq5g5e2jxkskpnulwd8d5duu8djugj8xz5evyql8kx5tz',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    timestamp: 'August 23, 2024, 09:23 AM',
  },
  {
    author: 'nqtsq5g54cxvq0s536s8nhqynmk43ucyhgyezp23vh6gp9yr',
    content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio!',
    timestamp: 'August 22, 2024, 10:30 PM',
  },
]);

const route = useRoute();
const author = ref(route.params.author);

const filteredPosts = computed(() =>
    allPosts.value.filter(post => post.author === author.value)
);
</script>

<template>
  <div class="content">
    <h2>{{ author }}'s Posts</h2>
    <div v-for="(post, index) in filteredPosts" :key="index" class="message-box">
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
  max-width: 600px;
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