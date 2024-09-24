<script setup></script>

<template>
  <!-- Hero Section Start -->
  <div
    class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible bg-blue-50"
  >
    <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
      <div class="lg:w-5/6 order-2 lg:order-none">
        <h3
          class="text-2xl xl:text-3xl font-theme-heading text-center lg:text-left"
        >
          사람이 중심이 되는 AI 솔루션의 첫걸음
        </h3>
        <br />

        <h1
          class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left fade-in"
        >
          AI 윤리 자가진단
        </h1>
        <p
          class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left"
        >
          점점 똑똑해지는 AI,
          <br />
          윤리도 지킬 수 있도록 미리 점검하세요.
        </p>
        <div class="flex justify-center lg:justify-start mt-10">
          <!-- <LinkButton btn-type="primary" to="/selfcheck">진단하기</LinkButton> -->
          <LinkButton btn-type="primary" to="/selecttype">진단하기</LinkButton>
          <LinkButton btn-type="primary" href="#faq">문의하기</LinkButton>
        </div>
      </div>
      <div
        class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10"
      >
        <img class="z-10 w-full" src="/images/aiescrobot.png" />
        <!-- <div
          class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"
        ></div> -->
      </div>
    </section>
  </div>
  <!-- Hero Section End -->
</template>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 2s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
