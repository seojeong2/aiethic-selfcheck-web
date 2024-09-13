<template>
  <div class="analysis-container bg-white p-4 rounded shadow mt-6">
    <h3 class="text-2xl md:text-3xl font-theme-heading font-medium text-center">
      분석 결과
    </h3>
    <p class="text-lg mt-4">
      Upstream에서 Yes 응답: {{ yesCount.Upstream }} / No 응답:
      {{ noCount.Upstream }}

      Upstream 몇개 이하시 표시할 멘트 로직 추가
    </p>
    <p class="text-lg">
      Model에서 Yes 응답: {{ yesCount.Model }} / No 응답: {{ noCount.Model }}
      이하동일
    </p>
    <p class="text-lg">
      DownStream에서 Yes 응답: {{ yesCount.DownStream }} / No 응답:
      {{ noCount.DownStream }}
    </p>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.analysis-container {
  border-top: 1px solid #eaeaea;
}
</style>
