<template>
  <div class="content">
    <div class="new-post-container">
      <h2>Create a New Post</h2>
      <!-- Display the author's name -->
      <div class="author-display">
        <strong>Author:</strong> {{ author }}
      </div>
      <form @submit.prevent="submitPost">
        <div class="form-group">
          <textarea
              id="content"
              v-model="content"
              required
              placeholder="What's on your mind?"
          ></textarea>
        </div>
        <button type="submit" class="submit-button">Post</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineEmits } from 'vue';

// Assume the author is set when the user is logged in
const author = ref('nq4sq9zf0q63u5n562sask237h4tzuhkr0h4xa...');  // Replace with the actual logged-in user's public key

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
  content.value = '';
  router.push({ name: 'Home' }); // Redirect to home page after submission
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center; /* Center the container horizontally */
  align-items: flex-start; /* Align the container to the top */
  min-height: 100vh;
  padding: 20px;
}

.new-post-container {
  font-family: Arial, sans-serif;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 25px;
  max-width: 400px;
  width: 100%;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
  color: #333;
}

.author-display {
  margin-bottom: 20px;
  font-size: 0.95em;
  color: #555;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

textarea {
  width: calc(100% - 24px); /* Ensure padding is accounted for on both sides */
  height: 100px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  color: #333;
  resize: vertical;
  transition: border-color 0.3s ease;
}

textarea:focus {
  border-color: #007bff;
  outline: none;
}

.submit-button {
  display: block;
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px;
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>