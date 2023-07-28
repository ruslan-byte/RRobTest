F<template>
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

<style lang="scss">
  .app.container {padding-top: 60px; }
  @media (min-width: $tablet)
  {
    .app.container {padding-top: 80px; }
  }
  @media (min-width: $desktop)
  {
    .app.container {padding-top: 100px; }
  }
</style>