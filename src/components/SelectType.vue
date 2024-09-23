<template>
  <div id="select-type" class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
        >
          테스트 유형
        </h2>
        <p
          class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
        ></p>
      </div>
      <div class="flex justify-center space-x-4 mt-10">
        <!-- 버튼을 중앙에 배치하고 여백 추가 -->
        <button @click="goToTypeA" class="btn-test type-a">
          Foundation Model Transparency
        </button>
        <button @click="goToTypeB" class="btn-test type-b">
          인공지능 자율점검 윤리표
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToTypeA = () => {
  router.push("/selfcheck"); // 유형 A 질문 페이지로 이동
};

const goToTypeB = () => {
  router.push("/selfcheckB"); // 유형 B 질문 페이지로 이동
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.btn-test {
  background-color: #4caf50;
  color: white;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-test:hover {
  background-color: #45a049;
}

.type-a {
  background-color: #007bff;
}

.type-a:hover {
  background-color: #0069d9;
}

.type-b {
  background-color: #ff5733;
}

.type-b:hover {
  background-color: #e74c3c;
}

/* 제목과 버튼 사이 여백 추가 */
.mt-10 {
  margin-top: 2.5rem;
}
#select-type {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 이 페이지에서만 세로 중앙 정렬 */
  height: 100%;
}
</style>
