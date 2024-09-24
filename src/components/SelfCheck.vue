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
        ></p>
        <div class="container">
          <div
            class="question-card"
            v-for="checklist in paginationQuestions"
            :key="checklist.id"
          >
            <p class="question-text">
              {{ checklist.question }}
            </p>

            <div class="options">
              <label class="option">
                <input
                  type="radio"
                  value="yes"
                  v-model="answerMap[checklist.id]"
                  :name="'answer-' + checklist.id"
                />
                예
              </label>
              <label class="option">
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
        </div>

        <div class="navigation flex items-center justify-center mt-4 space-x-4">
          <!-- 왼쪽 버튼들 -->
          <div class="left-button flex items-center space-x-4">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200"
            >
              <!-- 이전 버튼에 화살표 아이콘 추가 -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span class="ml-2">이전</span>
            </button>

            <span class="text-lg font-semibold"
              >{{ currentPage }} / {{ totalPages }}</span
            >

            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200"
            >
              <span class="mr-2">다음</span>
              <!-- 다음 버튼에 화살표 아이콘 추가 -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <!-- 결과 보기 버튼 -->
          <button
            @click="checkResults"
            v-if="currentPage === totalPages"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 absolute right-0"
          >
            결과 보기
          </button>
        </div>

        <UnansweredList
          :resultsVisible="resultsVisible"
          :allAnswered="allAnswered"
          :unansweredQuestions="unansweredQuestions"
          :yesCountByType="yesCountByType"
          :noCountByType="noCountByType"
          :currentPage="currentPage"
          :totalPages="totalPages"
          :goToQuestionPage="goToQuestionPage"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, nextTick } from "vue";
// import { BootstrapVue, BootStrapVueIcons } from "bootstrap-vue";

import checklists from "../data/checklists.js";
import fmtlists from "../data/fmtlist.js";
import UnansweredList from "./UnanswerdList.vue";
import { useRouter } from "vue-router";

const checklistsRef = ref(fmtlists);
const unansweredList = ref(null);
const questionsPerPage = 10;
const currentPage = ref(1);
const resultsVisible = ref(false);

const router = useRouter();

// 동적 응답 데이터 생성
const answerMap = ref(
  checklistsRef.value.reduce((acc, question) => {
    acc[question.id] = null; // 초기값 null 세팅
    return acc;
  }, {})
);

const checkResults = () => {
  if (unansweredQuestions.value.length > 0) {
    resultsVisible.value = true;

    // 응답하지 않은 항목으로 스크롤
    nextTick(() => {
      if (unansweredList.value) {
        unansweredList.value.scrollIntoView({ behavior: "smooth" });
      }
    });
  } else {
    // 응답이 모두 완료되면 Chart 생성 페이지로 이동

    const types = ["Upstream", "Model", "DownStream"];

    const yesCounts = {};
    const noCounts = {};

    types.forEach((type) => {
      yesCounts[type] = yesCountByType(type);
      noCounts[type] = noCountByType(type);
    });

    // const yesCounts = {
    //   Upstream: yesCountByType("Upstream"),
    //   Model: yesCountByType("Model"),
    //   DownStream: yesCountByType("DownStream"),
    // };

    // const noCounts = {
    //   Upstream: noCountByType("Upstream"),
    //   Model: noCountByType("Model"),
    //   DownStream: noCountByType("DownStream"),
    // };

    router.push({
      name: "MakeChart",
      query: {
        yesCount: JSON.stringify(yesCounts),
        noCount: JSON.stringify(noCounts),
        types: JSON.stringify(types),
        aiccYesCounts: JSON.stringify(aiccYesCounts),
        midmYesCounts: JSON.stringify(midmYesCounts),
      },
    });
  }
};

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// 특정 타입에 대한 응답 카운트 계산
const getCountByType = (type, response) => {
  return Object.values(answerMap.value).filter((answer, index) => {
    const question = checklistsRef.value[index];
    return question.type === type && answer === response;
  }).length;
};

// 각 타입별 예/아니오 응답 카운트
const yesCountByType = (type) => getCountByType(type, "yes");
const noCountByType = (type) => getCountByType(type, "no");

// 응답되지 않은 질문 확인
const unansweredQuestions = computed(() => {
  return checklistsRef.value.filter(
    (question) => answerMap.value[question.id] === null
  );
});

const allAnswered = computed(() => {
  return unansweredQuestions.value.length === 0;
});

// 응답되지 않은 질문 페이지로 이동
const goToQuestionPage = (questionId) => {
  // 질문 ID에 해당하는 페이지를 찾기
  const questionIndex = checklistsRef.value.findIndex(
    (q) => q.id === questionId
  );
  const page = Math.floor(questionIndex / questionsPerPage) + 1;
  currentPage.value = page;
};

const types = ["Upstream", "Model", "DownStream"];

// 미리 응답한 AICC, 믿음의 카운트 계산
const countYesPreResponseByType = (subject, type) => {
  return checklistsRef.value.reduce((count, question) => {
    if (question.type === type && Array.isArray(question.response)) {
      // 타입이 일치하는지 확인
      const subjectResponse = question.response.find(
        (res) => res.subject === subject && res.response === "yes"
      );
      return subjectResponse ? count + 1 : count;
    }
    return count; // 타입이 다르면 카운트하지 않음
  }, 0);
};

// 각 타입에 대해 카운트
const aiccYesCounts = types.reduce((acc, type) => {
  acc[type] = countYesPreResponseByType("AICC", type);
  return acc;
}, {});

const midmYesCounts = types.reduce((acc, type) => {
  acc[type] = countYesPreResponseByType("믿음", type);
  return acc;
}, {});

console.log("AICC의 yes 카운트: ", aiccYesCounts);
console.log("midm의 yes 카운트: ", midmYesCounts);
</script>
<style scoped>
.question-box {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  /* background-color: bisque; */

  height: 120px;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  position: relative;
}

.navigation > span {
  margin: 0 15px;
}

.left-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-button {
  position: absolute;
  right: 0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.question-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  /* display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center; */
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  height: 130px;
  max-width: 600px; /* 원하는 최대 너비로 설정하세요 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

.question-text {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  padding-top: 10px;
}

.options {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.option {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #333;
}

.option input[type="radio"] {
  accent-color: #007bff;
}

.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
}

.prev {
  border-width: 10px 15px 10px 0;
  border-right-color: #007bff; /* 화살표 색상 설정 */
}

.next {
  border-width: 10px 0 10px 15px;
  border-left-color: #007bff; /* 화살표 색상 설정 */
}

.arrow:disabled {
  border-color: transparent;
  cursor: not-allowed; /* 비활성화 상태일 때 커서 변경 */
  opacity: 0.5; /* 비활성화 상태일 때 투명도 조정 */
}
</style>
