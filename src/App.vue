<template>
  <div class="app container">
    <Header />
  </div>
</template>
<script>
  import Header from '@/components/Header.vue';
  export default {
   components:['Header']
  }
</script>

<style>
  .app.container
  {
    padding-top: 92px;
  }
</style>