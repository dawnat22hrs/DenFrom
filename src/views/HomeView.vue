<script setup lang="ts">
import Button from '../components/Button.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="main">
    <RouterLink to="/AddCourse" class="rl">
      <Button>Добавить курс</Button>
    </RouterLink>
    <RouterLink to="/AddParse" class="rl">
      <Button>Добавить парс</Button>
    </RouterLink>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;

  .rl {
    text-decoration: none;
  }
}


</style>
