<script setup>
import SearchNav from './components/SearchNav.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <SearchNav />
      </div>
      <div class="col-12">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
