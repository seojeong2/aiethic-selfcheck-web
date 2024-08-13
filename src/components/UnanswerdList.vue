<script setup>
const props = defineProps({
  resultsVisible: Boolean,
  allAnswered: Boolean,
  unansweredQuestions: Array,
  yesCount: Number,
  noCount: Number,
  goToQuestionPage: Function,
});
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
    <div v-if="allAnswered" class="text-center mt-4">
      <p class="text-green-600 font-bold">Yes: {{ yesCount }}</p>
      <p class="text-red-600 font-bold">No: {{ noCount }}</p>
    </div>
  </div>
</template>
