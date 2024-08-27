<template>
  <div
    class="search-input-wrapper relative bg-[#f2f2f2] hover:bg-[#0000001f] before:absolute before:bottom-0 before:border-b before:w-full before:border-b-[#0000006b] hover:before:border-b-[#000000de] after:absolute after:bottom-0 after:border-b after:w-full after:border-b-[#000000de] after:scale-0 focus-within:after:transition-transform focus-within:after:duration-[600ms] focus-within:after:scale-100 focus-within:after:border-b-2 focus-within:after:border-b-[#03a9f4]"
  >
    <div
      class="default-icon block h-[34px] w-[34px] absolute bottom-0 py-[9px] pl-3 pr-1.5 dx-icon dx-icon-search text-center leading-4 font-normal text-[#0000008a]"
    />
    <input
      :placeholder="placeholderText"
      class="search-input block z-10 w-full py-[9px] pl-[34px] pr-3 bg-transparent leading-[14px] text-xs placeholder:text-xs placeholder:text-[#00000099] outline-none"
      type="text"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { SearchProps } from "../types/SearchProps";

//props
defineProps<SearchProps>();
//emits
const emits = defineEmits(["getInputValue"]);

//functions
const onInput = (event: Event) => {
  const el = event.target as HTMLInputElement;
  emits("getInputValue", el.value);
};
</script>

<style lang="scss" scoped></style>

<!-- <Search placeholderText="Search"/>-->
