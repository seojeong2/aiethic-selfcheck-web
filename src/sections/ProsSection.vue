<script setup>
import proslist from "../data/proslist";
</script>

<template>
  <!-- Download Section Start -->
  <div id="pros-section" class="container mx-auto px-5 md:w-4/5 bg-gray-100">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
        >
          AI-ESC 자가진단 페이지를 사용하면 이런 점이 좋아요!
        </h2>
        <!-- <p
          class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7"
        >
          We've got more browsers in pipeline. Please do let us know if you've
          got a favourite you'd like us to prioritize.
        </p> -->
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div v-for="pros in proslist" :key="pros.id" class="rounded-lg h-150">
          <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">
            {{ pros.id }}
          </h3>
          <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">
            {{ pros.title }}
          </h3>

          <div class="flex justify-center mt-12">
            <img :src="pros.icon" alt="Browser Logo" style="height: 120px" />
          </div>
          <div class="px-4">
            <p
              class="text-md font-theme-content text-theme-grayish-blue text-center mt-3 mb-4 leading-relaxed"
            >
              {{ pros.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
