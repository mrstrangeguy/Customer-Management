<template>
  <button
    :class="{
      'button-default': true,
      'rounded-full': isRounded && !props.text,
      'rounded-sm': !isRounded,
      'common-primary': variant !== ButtonVariants.Outlined,
      'common-secondary': variant === ButtonVariants.Outlined,
      [buttonStyle]: true,
    }"
    :style="{ backgroundColor: buttonBgColor }"
    @mouseover="setBackgroundColor(hoverBg)"
    @mouseleave="setBackgroundColor(bgColor)"
    @click="onButtonClick"
  >
    <i
      :class="{
        'default-icon': true,
        [icon]: true,
        'mr-1': text,
        'mr-0': !text,
      }"
    />
    <span class="text-style">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ButtonsProps } from "../types/ButtonProps";
import { ButtonVariants } from "../Constants";

const props = withDefaults(defineProps<ButtonsProps>(), {
  text: "",
  icon: "",
  variant: "",
  bgColor: "",
  hoverBg: "#028bc9",
  isRounded: false,
  buttonStyle: "",
});

//refs
const buttonBgColor = ref<string>("");

//onMounted
onMounted(() => {
  buttonBgColor.value = props.bgColor;
});

//emits
const emit = defineEmits<{
  (e: "buttonClicked", event: Event): void;
}>();

//functions
const onButtonClick = (event: Event) => {
  emit("buttonClicked", event);
};

const setBackgroundColor = (color: string) => {
  buttonBgColor.value = color;
};
</script>

<style lang="scss" scoped>
.button-default {
  cursor: pointer;
}

.default-icon {
  font-size: 16px;
  display: block;
}

.enable-right-margin {
  margin-right: 4px;
}

.button-default.common-primary,
.button-default.common-secondary {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
}

.button-default.common-primary {
  padding: 5px 12px 5px 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
  height: 28px;
  color: white;

  &:hover {
    background-color: rgb(2, 139, 201) !important;
  }

  .default-icon {
    color: white;
    height: 16px;
    width: 16px;
    line-height: 16px;
  }

  .text-style {
    line-height: 15px;
  }
}

.button-default.common-secondary {
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  color: rgba(0, 0, 0, 0.87);
  justify-content: center;
  height: 26px;
}

.button-default.icon {
  padding: 5px;
  transition: 0.4s ease;
  line-height: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
}

.text-style {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  display: block;
  letter-spacing: 0.52px;
}
</style>
