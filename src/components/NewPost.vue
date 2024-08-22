<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineEmits } from 'vue';

const author = ref('');
const content = ref('');
const emit = defineEmits(['add-post']);
const router = useRouter();

const submitPost = () => {
  const newPost = {
    author: author.value,
    content: content.value,
    timestamp: new Date().toLocaleString(),
  };
  emit('add-post', newPost);
  author.value = '';
  content.value = '';
  router.push({ name: 'Home' }); // Redirect to home page after submission
};
</script>

<template>
  <div class="new-post-container">
    <h2>Create a New Post</h2>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label for="author">Author:</label>
        <input
            type="text"
            id="author"
            v-model="author"
            required
            placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="content">Message:</label>
        <textarea
            id="content"
            v-model="content"
            required
            placeholder="Enter your message"
        ></textarea>
      </div>
      <button type="submit" class="submit-button">Post</button>
    </form>
  </div>
</template>

<style scoped>
.new-post-container {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

.submit-button {
  display: inline-block;
  background-color: #007bff; /* Blue background */
  color: white; /* White text */
  padding: 10px 20px; /* Padding for the button */
  font-size: 1em; /* Font size */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
}

.submit-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>