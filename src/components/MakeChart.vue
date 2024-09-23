<template>
  <div class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <!-- <div class="w-4/5 md:w-4/5 mx-auto">
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
      </div> -->
      <div class="flex justify-between items-start">
        <!-- 진단 결과 -->
        <div class="w-1/2 pr-4">
          <h2 class="text-3xl md:text-4xl font-theme-heading font-medium mb-4">
            진단 결과
          </h2>
          <h3 class="text-xl md:text-2xl font-theme-heading font-medium mb-6">
            총점: {{ yesTotal }} 점
          </h3>
          <div
            class="max-w-lg mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
          >
            <canvas id="surveyChart"></canvas>
          </div>
        </div>

        <!-- 분석 결과 -->
        <div class="w-1/2 pl-4">
          <h2 class="text-3xl md:text-4xl font-theme-heading font-medium mb-4">
            분석 결과
          </h2>
          <div class="bg-white p-4 rounded shadow">
            <!-- 분석 결과 내용 넣기 -->
            <p>여기에 분석 결과 내용이 들어갑니다.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible bg-blue-50 grid grid-cols-1 md:grid-cols-3 gap-4"
  >
    <!--테스트 -->
    <div
      v-for="(type, index) in props.types"
      :key="index"
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
        <canvas :id="`${type}_detail_chart`"></canvas>
      </div>
    </div>
  </div>
  <!-- 
  <Analysis :yesCount="yesCounts" :noCount="noCounts"></Analysis> -->
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
import ChartDataLables from "chartjs-plugin-datalabels";

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
  Legend,
  ChartDataLables
);
const route = useRoute();

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
const types = ref(props.types);
const aiccYesCounts = ref(JSON.parse(route.query.aiccYesCounts) || "{}");
const midmYesCounts = ref(JSON.parse(route.query.midmYesCounts) || "{}");

console.log("yesCounts: ", yesCounts);
console.log("types: ", types);
console.log("aiccYesCounts: ", aiccYesCounts);
console.log("midmYesCounts: ", midmYesCounts);

// 전체 응답의 yes 카운트 계산
const yesTotal = computed(() => {
  return props.types.reduce((total, type) => {
    return total + (yesCounts.value[type] || 0);
  }, 0);
});

const noTotal = computed(() => {
  return props.types.reduce((total, type) => {
    return total + (noCounts.value[type] || 0);
  }, 0);
});

// 전체 응답수 계산

// 전체 응답수 계산
const totalResponses = computed(() => {
  return props.types.reduce((total, type) => {
    return (
      total + (yesCounts.value[type] || 0) + (noCounts.value[type] || 0) // 같은 방식으로 noCounts도 계산
    );
  }, 0);
});

// chart.js 렌더링
const renderChart = () => {
  const ctx = document.getElementById("surveyChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["예", "아니오"],
      datasets: [
        {
          label: "Survey Responses",
          data: [yesTotal.value || 0, noTotal.value || 0],
          backgroundColor: ["rgba(102,153,255,1)", "rgba(242,242,242,1)"],
          borderColor: ["rgba(151,126,209,1)", "rgba(242,242,242,1)"],
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
        datalabels: {
          display: true,
          color: "#1c1d1a",
          formatter: (value, context) => {
            const total = context.chart.data.datasets[0].data.reduce(
              (acc, val) => acc + val,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1) + "%";
            return percentage; // 비율 표시
          },
        },
      },
    },
  });

  types.value.forEach((type) => {
    const ctxs = document
      .getElementById(`${type}_detail_chart`)
      .getContext("2d");
    new Chart(ctxs, {
      type: "bar",
      data: {
        labels: ["사용자 응답", "AICC", "믿음"],
        datasets: [
          {
            label: `${type} 응답 개수`,
            data: [
              yesCounts.value[type] || 0,
              aiccYesCounts.value[type] || 0,
              midmYesCounts.value[type] || 0,
            ],
            backgroundColor: [
              "rgba(255,208,77,1)",
              "rgba(255,107,107,1)",
              "rgba(0,207,165,1)",
            ],
            borderColor: [
              "rgba(255,208,77,1)",
              "rgba(255,107,107,1)",
              "rgba(0,207,165,1)",
            ],
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
        },
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });
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
