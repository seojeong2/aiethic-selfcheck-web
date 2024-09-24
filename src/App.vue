<script setup>
import Header from "./layouts/Header.vue";
import Main from "./layouts/Main.vue";
import Footer from "./layouts/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Header />

    <!-- <Main/> -->
    <!-- <div class="main-content"> -->
    <router-view></router-view>
    <!-- </div> -->

    <Footer />
  </div>
</template>

<style scoped>
.main-content {
  min-height: calc(100vh - 150px); /* 헤더와 푸터 높이에 따라 조정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 가운데 정렬 */
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 화면 높이 */
}

router-view {
  flex: 1; /* 메인 콘텐츠가 가능한 공간을 차지하도록 설정 */
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
}
</style>
