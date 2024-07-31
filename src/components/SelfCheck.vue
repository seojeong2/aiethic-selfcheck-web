<template>
  <div id="self-check" class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
        >
          진단하기
        </h2>
        <p
          class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
        >
          Here are some of out FAQs. If you have any other quesitons you'd like
          answered please feel free to email us.
        </p>
        <div class="flex flex-col ...">
          <div
            class="question-box"
            v-for="checklist in paginationQuestions"
            :key="checklist.id"
          >
            <p
              class="bg-slate-50 font-theme-content text-md lg:text-lg py-5 text-gray-500 text-justify"
            >
              {{ checklist.question }}
            </p>

            <label>
              <input
                type="radio"
                value="yes"
                v-model="answerMap[checklist.id]"
                :name="'answer-' + checklist.id"
              />
              예
            </label>
            <label>
              <input
                type="radio"
                value="no"
                v-model="answerMap[checklist.id]"
                :name="'answer-' + checklist.id"
              />
              아니오
            </label>
          </div>
        </div>

        <div class="navigation">
          <Button
            btnType="primary"
            @click="prevPage"
            :disabled="currentPage === 1"
          >
            이전</Button
          >

          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <!-- <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
          </button> -->
          <Button
            btnType="primary"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            다음</Button
          >
        </div>

        <button @click="checkResults" v-if="currentPage === totalPages">
          결과 보기
        </button>

        <div v-if="resultsVisible">
          <h3 v-if="!allAnswered">응답하지 않았습니다.</h3>
          <ul v-if="!allAnswered">
            <li v-for="question in unansweredQuestions" :key="question.id">
              <button @click="goToQuestionPage(question.id)">
                Question {{ question.id }}: {{ question.question }}
              </button>
            </li>
          </ul>
          <p v-if="allAnswered">Yes: {{ yesCount }}</p>
          <p v-if="allAnswered">No: {{ noCount }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import checklists from "../data/checklists.js";

const checklistsRef = ref(checklists);
const questionsPerPage = 5;
const currentPage = ref(1);
const resultsVisible = ref(false);

// 동적 응답 데이터 생성
const answerMap = ref(
  checklistsRef.value.reduce((acc, question) => {
    acc[question.id] = null; // 초기값 null 세팅
    return acc;
  }, {})
);

const totalPages = computed(() =>
  Math.ceil(checklistsRef.value.length / questionsPerPage)
);

// 페이지목록 계산
const paginationQuestions = computed(() => {
  const start = (currentPage.value - 1) * questionsPerPage;
  const end = start + questionsPerPage;
  return checklistsRef.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// 선택된 답변 카운트 계산
const yesCount = computed(() => {
  return Object.values(answerMap.value).filter((answer) => answer === "yes")
    .length;
});

const noCount = computed(() => {
  return Object.values(answerMap.value).filter((answer) => answer === "no")
    .length;
});

// 응답되지 않은 질문 확인
const unansweredQuestions = computed(() => {
  return checklistsRef.value.filter(
    (question) => answerMap.value[question.id] === null
  );
});

const allAnswered = computed(() => unansweredQuestions.value.length === 0);

const checkResults = () => {
  resultsVisible.value = true;
};

// 응답되지 않은 질문 페이지로 이동
const goToQuestionPage = (questionId) => {
  // 질문 ID에 해당하는 페이지를 찾기
  const questionIndex = checklistsRef.value.findIndex(
    (q) => q.id === questionId
  );
  const page = Math.floor(questionIndex / questionsPerPage) + 1;
  currentPage.value = page;
};
</script>
<style scoped>
.question-box {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  /* background-color: bisque; */
  border-color: bisque;
  height: 120px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
</style>
