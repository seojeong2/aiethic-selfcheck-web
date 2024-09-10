<template>
  <div class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-4/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
        >
          진단 결과
        </h2>
        <div
          class="max-w-screen-lg mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
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
      class="chart-container bg-white p-4 rounded shadow"
      style="min-height: 200px"
    >
      <h3
        class="text-2xl md:text-3xl font-theme-heading font-medium text-center"
      >
        Upstream
      </h3>
      <div
        class="max-w-screen-sm mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
      >
        <!-- Chart 1 -->
        <canvas id="chart1"></canvas>
      </div>
    </div>

    <div
      class="chart-container bg-white p-4 rounded shadow"
      style="min-height: 150px"
    >
      <h3
        class="text-2xl md:text-3xl font-theme-heading font-medium text-center"
      >
        Model
      </h3>
      <!-- Chart 2 -->
      <div
        class="max-w-screen-sm mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
      >
        <canvas id="chart2"></canvas>
      </div>
    </div>

    <div
      class="chart-container bg-white p-4 rounded shadow"
      style="min-height: 150px"
    >
      <h3
        class="text-2xl md:text-3xl font-theme-heading font-medium text-center"
      >
        DownStream
      </h3>
      <div
        class="max-w-screen-sm mx-auto px-5 overflow-x-hidden lg:overflow-x-visible"
      >
        <!-- Chart 3 -->
        <canvas id="chart3"></canvas>
      </div>
    </div>
  </div>
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
} from "chart.js";
import { ref, watch } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

// Chart.js에 필요한 컴포넌트를 등록
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
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
});
// 데이터는 props로부터 전달받음
const yesCounts = ref(props.yesCount);
const noCounts = ref(props.noCount);

// chart.js 렌더링
const renderChart = () => {
  const ctx = document.getElementById("surveyChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "upstream - o",
        "upstream - x",
        "model - o",
        "model - x",
        "downstream - o",
        "downstream - x",
      ],
      datasets: [
        {
          label: "Survey Responses",
          data: [
            yesCounts.value.Upstream || 0,
            noCounts.value.Upstream || 0,
            yesCounts.value.Model || 0,
            noCounts.value.Model || 0,
            yesCounts.value.DownStream || 0,
            noCounts.value.DownStream || 0,
          ],
          backgroundColor: [
            "#4caf50",
            "#f44336",
            "#4caf50",
            "#f44336",
            "#4caf50",
            "#f44336",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(54, 162, 235, 1)",
          ],
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
  () => [props.yesCount, props.noCount],
  () => {
    yesCounts.value = props.yesCount;
    noCounts.value = props.noCount;
    renderChart();
  },
  { deep: true }
);
</script>
