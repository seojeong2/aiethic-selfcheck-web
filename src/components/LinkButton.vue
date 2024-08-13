<script setup>
import { computed } from "vue";

const props = defineProps({
  btnType: String,
  link: String,
  to: String,
  class: {
    type: String,
    default: "text-sm sm:text-md md:text-base",
  },
  style: {
    type: Object,
    default: () => ({}),
  },
});

const computedHref = computed(() => {
  // 링크가 mailto로 이어지는지
  if (props.link && props.link.startsWith("mailto:")) {
    console.log("props.link: ", props.link);
    return props.link;
  }
  return props.link || "#";
});
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    :class="{
      'font-theme-heading font-medium bg-theme-primary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary cursor-pointer transition duration-200 mr-5':
        btnType === 'primary',
      'font-theme-heading font-medium bg-gray-100 text-gray-500 px-6 py-2 rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-grayish-blue hover:text-theme-grayish-blue cursor-pointer transition duration-200':
        btnType === 'muted',
    }"
    :style="{
      width: btnType === 'primary' ? '120px' : '',
      width: btnType === 'muted' ? '120px' : '',
    }"
  >
    <slot></slot>
  </router-link>

  <a
    v-else
    :href="computedHref"
    :class="{
      'font-theme-heading font-medium bg-theme-primary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary cursor-pointer transition duration-200 mr-5':
        btnType === 'primary',
      'font-theme-heading font-medium bg-gray-100 text-gray-500 px-6 py-2 rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-grayish-blue hover:text-theme-grayish-blue cursor-pointer transition duration-200':
        btnType === 'muted',
    }"
  >
    <slot></slot>
  </a>

  <!-- <a
    v-if="btnType === 'primary'"
    :href="link"
    v-smooth-scroll
    :class="class"
    class="font-theme-heading font-medium bg-theme-primary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary cursor-pointer transition duration-200 mr-5"
  >
    <slot></slot>
  </a>
  <a
    v-if="btnType === 'muted'"
    :href="link"
    v-smooth-scroll
    :class="class"
    class="font-theme-heading font-medium bg-gray-100 text-gray-500 px-6 py-2 rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-grayish-blue hover:text-theme-grayish-blue cursor-pointer transition duration-200"
  >
    <slot></slot>
  </a> -->
</template>
