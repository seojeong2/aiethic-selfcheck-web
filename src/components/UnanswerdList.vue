<script setup>
import { nextTick, watch } from "vue";
const props = defineProps({
  resultsVisible: Boolean,
  allAnswered: Boolean,
  unansweredQuestions: Array,
  yesCountByType: Function,
  noCountByType: Function,
  currentPage: Number,
  totalPages: Number,
  goToQuestionPage: Function,
});

watch(
  () => props.unansweredQuestions,
  async (newVal, oldVal) => {
    if (newVal.length === 0 && oldVal.length > 0) {
      // 모든 질문이 응답되었을 때 DOM 업데이트를 기다림
      await nextTick();
    }
  }
);

// 질문타입 목록
const questionTypes = ["UpStream", "Model", "DownStream"];
</script>

<template>
  <div
    v-if="resultsVisible"
    ref="unansweredList"
    class="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-5"
  >
    <h3
      v-if="!allAnswered"
      class="text-xl font-semibold text-gray-800 mb-4 text-center"
    >
      응답하지 않았습니다.
    </h3>
    <ul v-if="!allAnswered" class="space-y-2">
      <li
        v-for="question in unansweredQuestions"
        :key="question.id"
        class="text-center"
      >
        <button
          @click="goToQuestionPage(question.id)"
          class="bg-yellow-50 text-gray py-2 px-4 rounded hover:bg-blue-50 transition duration-300 w-full"
        >
          Question {{ question.id }}: {{ question.question }}
        </button>
      </li>
    </ul>

    <!-- 타입별 응답 개수 -->
    <div
      v-if="allAnswered && currentPage === totalPages"
      class="text-center mt-4"
    >
      <h3 class="text-lg font-semibold text-gray-800 mb-4">타입별 응답 현황</h3>
      <div v-for="type in questionTypes" :key="type" class="mb-2">
        <p class="text-green-600 font-bold">
          {{ type }} - 예: {{ yesCountByType(type) }}
        </p>
        <p class="text-red-600 font-bold">
          {{ type }} - 아니오: {{ noCountByType(type) }}
        </p>
      </div>
    </div>

    <!-- <div v-if="allAnswered" class="text-center mt-4">
      <p class="text-green-600 font-bold">Yes: {{ yesCount }}</p>
      <p class="text-red-600 font-bold">No: {{ noCount }}</p>
    </div> -->
  </div>
</template>
