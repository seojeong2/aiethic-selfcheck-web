<template>
  <div id="select-type" class="container max-w-none mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-12">
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

      <!-- 이미지와 버튼을 나눠서 배치 -->
      <div class="flex justify-start items-center mt-10">
        <!-- 왼쪽 이미지 -->
        <div class="w-1/4 flex justify-center">
          <img src="/images/aiescrobot.png" alt="Image" class="image" />
        </div>
        <div class="w-1/4 flex justify-start"></div>

        <!-- 오른쪽 버튼 두 개 -->
        <div class="w-2/4 flex flex-col justify-center items-center space-y-4">
          <button
            @click="goToTypeA"
            class="btn-test type-a w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105"
          >
            Foundation Model Transparency
          </button>
          <button
            @click="goToTypeB"
            class="btn-test type-b w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105"
          >
            인공지능 자율점검 윤리표
          </button>
        </div>
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
  min-height: 80px; /* 최소 높이 */
  height: 80px; /* 고정 높이로 설정 */
  display: flex; /* 내용 중앙 정렬 */
  justify-content: center;
  align-items: center;
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

.mt-10 {
  margin-top: 2.5rem;
}

#select-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

/* 이미지 크기 조절 */
.image {
  max-width: 400px;
  height: auto;
}

/* 반응형 레이아웃 */
@media (min-width: 768px) {
  .flex {
    gap: 20px; /* 좌우 간격 추가 */
  }
}

@media (max-width: 767px) {
  .flex {
    flex-direction: column; /* 작은 화면에서 버튼이 이미지 아래로 내려감 */
  }
}
</style>
