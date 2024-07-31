<script setup>
import Header from "./layouts/Header.vue";
import Main from "./layouts/Main.vue";
import Footer from "./layouts/Footer.vue";
</script>

<template>
  <Header />

  <!-- <Main/> -->
  <router-view></router-view>

  <Footer />
</template>

<style scoped></style>
