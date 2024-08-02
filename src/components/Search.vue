<template>
  <div
    :class="{
      'relative bg-[#f2f2f2] before:absolute before:bottom-0 before:border-b before:w-full before:border-b-[#000000de] after:absolute after:bottom-0 after:border-b after:w-full after:border-b-[#000000de]': true,
      'after:scale-0': !isInputFocused,
      'after:transition-transform after:duration-[600ms] after:scale-100 after:border-b-2 after:border-b-[#03a9f4]':
        isInputFocused,
    }"
  >
    <div
      class="default-icon block h-[34px] w-[34px] absolute bottom-0 py-[9px] pl-3 pr-1.5 dx-icon dx-icon-search text-center leading-4 font-normal text-[#0000008a]"
    />
    <input
      :placeholder="placeholder"
      class="block z-10 w-full py-[9px] pl-[34px] pr-3 bg-transparent leading-[14px] text-xs placeholder:text-xs placeholder:text-[#00000099] outline-none"
      type="text"
      @focus="onInputFocus"
      @focusout="onInputFocusOut"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

//props
defineProps<{
  placeholder: string;
}>();

//refs
const isInputFocused = ref(false);

//functions
const onInputFocus = () => {
  isInputFocused.value = true;
};

const onInputFocusOut = () => {
  isInputFocused.value = false;
};
</script>

<style scoped></style>

<!-- <Search placeholder="Search"/> -->
