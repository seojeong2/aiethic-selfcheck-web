<template>
  <div class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-4/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-theme-heading font-medium text-center mb-4"
        >
          진단 결과
        </h2>

        <div>
          <h3
            class="text-xl md:text-2xl font-theme-heading font-medium text-center mb-6"
          >
            총점: {{ yesTotal }} 점
          </h3>
        </div>

        <div
          class="max-w-lg mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
        >
          <canvas id="surveyChart"></canvas>
        </div>
      </div>
    </section>
  </div>

  <div
    class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible bg-blue-50 grid grid-cols-1 md:grid-cols-3 gap-4"
  >
    <div
      v-for="type in types"
      :key="type"
      class="chart-container bg-white p-4 rounded shadow"
      style="min-height: 200px"
    >
      <h3
        class="text-2xl md:text-3xl font-theme-heading font-medium text-center"
      >
        {{ type }}
      </h3>
      <div
        class="max-w-screen-sm mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
      >
        <!-- Chart 1 -->
        <canvas id="getCanvasId(type)"></canvas>
      </div>
    </div>

    <div
      class="chart-container bg-white p-4 rounded shadow"
      style="min-height: 200px"
    >
      <h3
        class="text-2xl md:text-3xl font-theme-heading font-medium text-center"
      >
        인권 보장
      </h3>
      <div
        class="max-w-screen-sm mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
      >
        <!-- Chart 1 -->
        <canvas id="humanright_detail_chart"></canvas>
      </div>
    </div>

    <div
      class="chart-container bg-white p-4 rounded shadow"
      style="min-height: 150px"
    >
      <h3
        class="text-2xl md:text-3xl font-theme-heading font-medium text-center"
      >
        프라이버시 보호
      </h3>
      <!-- Chart 2 -->
      <div
        class="max-w-screen-sm mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
      >
        <canvas id="privacy_detail_chart"></canvas>
      </div>
    </div>

    <div
      class="chart-container bg-white p-4 rounded shadow"
      style="min-height: 150px"
    >
      <h3
        class="text-2xl md:text-3xl font-theme-heading font-medium text-center"
      ></h3>
      <div
        class="max-w-screen-sm mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
      >
        <!-- Chart 3 -->
        <canvas id="downstream_detail_chart"></canvas>
      </div>
    </div>
  </div>

  <Analysis :yesCount="yesCounts" :noCount="noCounts"></Analysis>
</template>

<script setup>
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PieController,
  ArcElement,
} from "chart.js";

import {
  ref,
  watch,
  computed,
  nextTick,
  guardReactiveProps,
  render,
} from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Analysis from "./AnalysisText.vue";

// Chart.js에 필요한 컴포넌트를 등록
Chart.register(
  PieController,
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);
const route = useRoute();

// 타입 리스트
const types = ref([
  "인권보장",
  "프라이버시 보호",
  "다양성 존중",
  "침해금지",
  "공공성",
  "연대성",
  "데이터 관리",
  "책임성",
  "투명성",
]);

// 타입 영어 매핑
const typeMapping = {
  인권보장: "humanRights",
  "프라이버시 보호": "privacyProtection",
  "다양성 존중": "respectForDiversity",
  침해금지: "prohibitionOfInfringement",
  공공성: "publicInterest",
  연대성: "solidarity",
  "데이터 관리": "dataManagement",
  책임성: "accountability",
  투명성: "transparency",
};

// 캔버스 ID 생성
const getCanvasId = (type) => {
  return typeMapping[type] || type;
};

//props 정의
const props = defineProps({
  yesCount: {
    type: Object,
    required: true,
  },
  noCount: {
    type: Object,
    required: true,
  },
  types: {
    type: Array,
    required: true,
  },
  aiccYesCounts: {
    type: Object,
    required: true,
  },
  midmYesCounts: {
    type: Object,
    required: true,
  },
});
// 데이터는 props로부터 전달받음
const yesCounts = ref(props.yesCount);
const noCounts = ref(props.noCount);

const aiccYesCounts = ref(JSON.parse(route.query.aiccYesCounts) || "{}");
const midmYesCounts = ref(JSON.parse(route.query.midmYesCounts) || "{}");

console.log("yesCounts: ", yesCounts);
console.log("types: ", types);
console.log("aiccYesCounts: ", aiccYesCounts);
console.log("midmYesCounts: ", midmYesCounts);

// yes 응답 카운트
const yesTotal = computed(() => {
  return (
    yesCounts.value.Upstream +
    yesCounts.value.Model +
    yesCounts.value.DownStream
  );
});

// 전체 응답수 계산
const totalResponses = computed(() => {
  return (
    yesCounts.value.Upstream +
    yesCounts.value.Model +
    yesCounts.value.Downstream +
    noCounts.value.Upstream +
    noCounts.value.Model +
    noCounts.value.Dowstream
  );
});

// chart.js 렌더링
const renderChart = () => {
  const ctx = document.getElementById("surveyChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["예", "아니오"],
      datasets: [
        {
          label: "Survey Responses",
          data: [
            yesCounts.value.Upstream +
              yesCounts.value.Model +
              yesCounts.value.DownStream || 0,
            noCounts.value.Upstream +
              noCounts.value.Model +
              noCounts.value.DownStream || 0,
          ],
          backgroundColor: ["#4caf50", "#f44336"],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}`;
            },
          },
        },
      },
    },
  });

  // Upsream 차트
  const ctx_up = document
    .getElementById("upstream_detail_chart")
    .getContext("2d");
  new Chart(ctx_up, {
    type: "bar",
    data: {
      labels: ["사용자 응답", "AICC", "믿음"],
      datasets: [
        {
          label: "Upstream Details",
          data: [
            yesCounts.value.Upstream || 0,
            aiccYesCounts.value.Upstream || 0,
            midmYesCounts.value.Upstream || 0,
          ],
          backgroundColor: ["#b153d9", "#b153d9"],
          borderColor: ["#b153d9", "#b153d9"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.lablel}: ${tooltipItem.raw}`;
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctx_model = document
    .getElementById("model_detail_chart")
    .getContext("2d");

  new Chart(ctx_model, {
    type: "bar",
    data: {
      labels: ["사용자 응답", "AICC", "믿음"],
      datasets: [
        {
          label: "Model Details",
          data: [yesCounts.value.Model || 0, aiccYesCounts.Model || 0],
          backgroundColor: ["#c086d9", "#c086d9"],
          borderColor: ["#c086d9", "#c086d9"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.lablel}: ${tooltipItem.raw}`;
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctx_down = document
    .getElementById("downstream_detail_chart")
    .getContext("2d");

  new Chart(ctx_down, {
    type: "bar",
    data: {
      labels: ["사용자 응답", "AICC", "믿음"],
      datasets: [
        {
          label: "DownStream Details",
          data: [
            yesCounts.value.DownStream || 0,
            noCounts.value.DownStream || 0,
          ],
          backgroundColor: ["#c086d9", "#c086d9"],
          borderColor: ["#c086d9", "#c086d9"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.lablel}: ${tooltipItem.raw}`;
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });
};

// 컴포넌트가 마운트될 때 차트를 렌더링
onMounted(renderChart);

// 데이터가 변경될 때 차트를 다시 렌더링
watch(
  () => [props.yesCount, props.noCount, guardReactiveProps.types],

  () => {
    yesCounts.value = props.yesCount;
    noCounts.value = props.noCount;
    aiccYesCounts.value = props.aiccYesCounts;
    midmYesCounts.value = props.midmYesCounts;

    renderChart();
  },

  { deep: true }
);
</script>
