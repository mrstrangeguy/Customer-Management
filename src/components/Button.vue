<template>
  <button
    :class="[
      'overflow-hidden flex items-center uppercase font-medium cursor-pointer',
      buttonStyle,
      {
        'rounded-full': isRounded && !props.text,
        'rounded-sm': !isRounded,
        'button-normal h-7': isNormalVariant,
        'justify-center': !isNormalVariant,
        'w-full': text,
      },
    ]"
    :style="{ backgroundColor: buttonBgColor }"
    @mouseover="setBackgroundColor(hoverBg)"
    @mouseleave="setBackgroundColor(bgColor)"
    @click="handleButtonClick"
  >
    <i
      v-if="icon"
      :class="[
        'default-icon text-base',
        icon,
        {
          'mr-1': text,
          'mr-0': !text,
          'h-4 w-4 2-4 leading-4': isNormalVariant,
        },
      ]"
    />
    <span
      :class="[
        'overflow-hidden text-nowrap text-ellipsis block',
        {
          'text-normal': isNormalVariant,
        },
      ]"
    >
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { ButtonsProps } from "../types/ButtonProps";
import { ButtonVariants } from "../Constants";

const props = withDefaults(defineProps<ButtonsProps>(), {
  text: "",
  icon: "",
  variant: ButtonVariants.Normal,
  bgColor: "",
  hoverBg: "#028bc9",
  isRounded: false,
  buttonStyle: "text-white",
});

//refs
const buttonBgColor = ref<string>("");

//onMounted
onMounted(() => {
  buttonBgColor.value = props.bgColor;
});

//emits
const emit = defineEmits<{
  (e: "button-click", event: Event): void;
}>();

//computed
const isNormalVariant = computed(() => props.variant === ButtonVariants.Normal);

//functions
const handleButtonClick = (event: Event) => {
  emit("button-click", event);
};

const setBackgroundColor = (color: string) => {
  buttonBgColor.value = color;
};
</script>

<style>
.text-normal {
  line-height: 15px;
}
</style>
