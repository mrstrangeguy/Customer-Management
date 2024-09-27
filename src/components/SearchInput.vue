<template>
  <div class="search-input-wrapper">
    <div
      class="search-icon default-icon block absolute bottom-0 dx-icon-search text-center text-slate-500"
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
import { ARROW_UP_KEY, ARROW_DOWN_KEY, KEY_E } from "../Constants";

type SearchProps = {
  placeholder?: string;
  value?: string;
  type?: string;
};

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

<style lang="scss" scoped>
.search-input-wrapper {
  position: relative;
  background-color: rgba(0, 0, 0, 0.04);

  &::before,
  &::after {
    content: "";
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  &::after {
    scale: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);

    &::before {
      border-bottom-color: black;
    }
  }

  &:focus-within {
    &::after {
      transition: scale 0.7s ease;
      scale: 1;
      border-bottom: 2px solid #03a9f4;
    }
  }
}

.search-icon {
  padding: 9px 6px 9px 12px;
  height: 34px;
  width: 34px;

  &::before {
    display: block;
    width: 16px;
    height: 16px;
    margin-top: -3px;
  }
}
</style>
