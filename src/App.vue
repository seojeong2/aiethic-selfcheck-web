<script setup>
import Header from "./layouts/Header.vue";
import Main from "./layouts/Main.vue";
import Footer from "./layouts/Footer.vue";
</script>

<template>
  <Header />

  <!-- <Main/> -->
  <!-- <div class="main-content"> -->
  <router-view></router-view>
  <!-- </div> -->

  <Footer />
</template>

<style scoped>
.main-content {
  min-height: calc(100vh - 150px); /* 헤더와 푸터 높이에 따라 조정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 가운데 정렬 */
}
</style>
