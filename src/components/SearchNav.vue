<script setup></script>
<template>
  <div class="row border-bottom border-primary border-3 justify-content-between">
    <div class="col-2">
      <h1>MobaStats</h1>
    </div>
    <div class="col-8">
      <form class="d-flex" @submit.prevent="">
        <input class="form-control mt-2 me-2 w-75" type="search" placeholder="Search" />
        <button class="btn btn-outline-primary mt-2" type="submit">Search</button>
      </form>
    </div>
  </div>
</template>
<style></style>
