<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="message-box">
    <div class="message-header">
      <span class="author">nq4sq9zf0q63u5n562sask237h4tzuhkr0h4xa...</span>
    </div>
    <div class="message-content">
      This is a sample message to display in the box.
    </div>
    <div class="message-footer">
      <span class="timestamp">August 22, 2024, 10:30 AM</span>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px; /* Add padding to create space from the top and sides */
}

h1 {
  margin-top: 0; /* Remove any top margin */
  margin-bottom: 20px; /* Adjust bottom margin to control space between h1 and the box */
}

.message-box {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px; /* Add margin at the bottom for spacing */
}

.message-header {
  margin-bottom: 10px;
  text-align: left; /* Align the header content to the left */
  width: 100%; /* Ensure full width for alignment */
}

.author {
  font-weight: bold;
  color: #333;
  display: block; /* Ensure author spans the full width */
  text-align: left; /* Align author text to the left */
}

.message-content {
  font-size: 1em;
  color: #555;
  line-height: 1.4;
  flex-grow: 1;
  margin-bottom: 10px;
  text-align: left; /* Align message content to the left */
  width: 100%; /* Ensure full width for alignment */
}

.message-footer {
  display: flex;
  justify-content: flex-end;
  width: 100%; /* Ensure full width for alignment */
}

.timestamp {
  font-size: 0.85em;
  color: #999;
}
</style>
