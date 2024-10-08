<script setup>
import features from "../data/features.js";
import { ref } from "vue";

let isOpen = ref(1);
</script>

<template>
  <!-- Features Section Start -->
  <div id="features" class="container mx-auto px-5">
    <section class="py-16">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-semibold font-theme-heading text-center"
        >
          AI 윤리소개
        </h2>
        <p
          class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
        >
          AI기술이 발전할 수록 AI 이해관계자들이 준수해야 할 보편적 사회 규범 및
          관련 기술인 인공지능 윤리에 대한 관심도 함께 높아지고 있습니다.
        </p>
      </div>

      <div class="mt-10">
        <ul
          class="flex flex-col items-center md:flex-row justify-center font-theme-heading"
        >
          <li
            v-for="feature in features"
            :key="feature.id"
            :class="
              isOpen === feature.id
                ? 'md:border-b-4 md:border-theme-secondary'
                : ''
            "
            class="w-full md:w-56 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center"
          >
            <a
              @click.prevent="isOpen = feature.id"
              href="#"
              :class="isOpen === feature.id ? ' border-theme-secondary' : ''"
              class="py-5 md:border-b-0 border-b-4"
              >{{ feature.name }}</a
            >
          </li>
        </ul>
      </div>

      <div class="mt-16">
        <!-- Tab Content -->
        <template v-for="feature in features" :key="feature.id">
          <div
            v-show="isOpen === feature.id"
            class="grid gap-32 lg:grid-cols-2 items-center"
          >
            <div class="relative">
              <img class="z-10 w-full" :src="feature.details.imageUrl" />
              <div
                class="-z-10 bg-theme-primary h-52 w-96 sm:h-80 sm:w-full rounded-r-full absolute -left-56 -bottom-16"
              ></div>
            </div>
            <div>
              <h3
                class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left fade-in"
              >
                {{ feature.details.title }}
              </h3>
              <p
                class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left fade-in-delay"
              >
                {{ feature.details.description }}
              </p>
              <div
                class="flex justify-center lg:justify-start mt-7 fade-in-delay-more"
              >
                <LinkButton btn-type="primary" :link="feature.details.link"
                  >More Info</LinkButton
                >
              </div>
            </div>
          </div>
        </template>
        <!-- Tab Content -->
      </div>
    </section>
  </div>
  <!-- Features Section End -->
</template>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease-in forwards;
}

.fade-in-delay {
  opacity: 0;
  animation: fadeIn 1.5s ease-in forwards;
  animation-delay: 1s; /* 1초 후에 시작 */
}
.fade-in-delay-more {
  opacity: 0;
  animation: fadeIn 1.5s ease-in forwards;
  animation-delay: 2s; /* 2초 후에 시작 */
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
