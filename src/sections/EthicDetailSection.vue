<script setup>
import ethicdetails from "../data/ethicdetails";
</script>

<template>
  <!-- Download Section Start -->
  <div id="ethicdetail-section" class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
        >
          AI 윤리의 원칙은 무엇인가요?
        </h2>
        <!-- <p
          class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7"
        >
          We've got more browsers in pipeline. Please do let us know if you've
          got a favourite you'd like us to prioritize.
        </p> -->
      </div>
      <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div
          v-for="ethic in ethicdetails"
          :key="ethic.id"
          class="shadow-lg rounded-lg"
        >
          <div class="flex justify-center mt-12">
            <img :src="ethic.icon" alt="Browser Logo" />
          </div>
          <h3
            class="text-2xl font-theme-heading font-medium text-center text-blue-500 mt-6"
          >
            {{ ethic.title }}
          </h3>
          <div class="px-4">
            <p
              class="text-md font-theme-content text-theme-grayish-blue text-center mt-3 mb-4 leading-relaxed"
            >
              {{ ethic.description }}
            </p>
          </div>

          <!-- <div class="flex justify-center mb-8">
            <LinkButton btn-type="primary" class="text-sm"
              >진단하러 가기</LinkButton
            >
          </div> -->
        </div>
      </div>
    </section>
  </div>
  <!-- Download Section End -->
</template>
