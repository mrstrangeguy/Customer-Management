<template>
  <div
    class="search-input-wrapper relative bg-zinc-100 hover:bg-zinc-200 before:absolute before:bottom-0 before:border-b before:w-full before:border-b-zinc-900 hover:before:border-b-black after:absolute after:bottom-0 after:border-b after:w-full after:border-b-zinc-900 after:scale-0 focus-within:after:transition-transform focus-within:after:duration-700 focus-within:after:scale-100 focus-within:after:border-b-2 focus-within:after:border-b-democrat"
  >
    <div
      class="default-icon block h-8.5 w-8 absolute bottom-0 py-2.25 pl-3 pr-1.5 dx-icon dx-icon-search text-center leading-4 font-normal text-slate-500"
    />
    <input
      :placeholder="placeholder"
      v-model="searchValue"
      class="block placeholder:capitalize z-10 w-full py-2.25 pl-8.5 pr-3 bg-transparent leading-3 text-xs placeholder:text-xs placeholder:text-gray-500 outline-none"
      @input="handleInput"
      @keydown="handleKeyDown"
      :type="type"
      @focusout="trimSearchInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SearchProps } from "../types/SearchProps";
import { ARROW_UP_KEY, ARROW_DOWN_KEY, KEY_E } from "../Constants";

//props
const props = withDefaults(defineProps<SearchProps>(), {
  placeholder: "Search",
  value: "",
});

//onMounted
onMounted(() => {
  searchValue.value = props.value;
});

//emits
const emits = defineEmits<{
  (event: "input", inputValue: string): void;
}>();

//refs
const searchValue = ref<string>("");

//functions
const handleInput = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  emits("input", inputElement.value);
};

const trimSearchInput = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;

  searchValue.value = inputElement.value.trim();
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (props.type !== "number") return;

  if ([ARROW_UP_KEY, ARROW_DOWN_KEY, KEY_E].includes(event.code)) {
    event.preventDefault();
  }
};
</script>
