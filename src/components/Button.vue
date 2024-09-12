<template>
  <button
    :class="[
      'button-default',
      buttonStyle,
      'overflow-hidden',
      {
        'rounded-full': isRounded && !props.text,
        'rounded-sm': !isRounded,
        'common-primary': variant !== ButtonVariants.Outlined,
        'common-secondary': variant === ButtonVariants.Outlined,
        'w-full': text,
      },
    ]"
    :style="{ backgroundColor: buttonBgColor }"
    @mouseover="setBackgroundColor(hoverBg)"
    @mouseleave="setBackgroundColor(bgColor)"
    @click="handleButtonClick"
  >
    <i
      :class="[
        'default-icon',
        icon,
        {
          'mr-1': text,
          'mr-0': !text,
        },
      ]"
    />
    <span
      :class="[
        'text-style w-full overflow-hidden text-nowrap text-ellipsis',
        {
          'text-left': isNormalVariant,
        },
      ]"
      >{{ text }}</span
    >
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
  buttonStyle: "!px-1.5 text-white",
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
const isNormalVariant = computed(() => props.variant === ButtonVariants.Normal);

//functions
const handleButtonClick = (event: Event) => {
  emit("button-click", event);
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

.button-default.common-primary,
.button-default.common-secondary {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
}

.button-default.common-primary {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
  height: 28px;

  .default-icon {
    height: 16px;
    width: 16px;
    line-height: 16px;
  }

  .text-style {
    line-height: 15px;
  }
}

.button-default.common-secondary {
  border: 1px solid rgba(0, 0, 0, 0.24);
  justify-content: center;
  height: 26px;
}

.text-style {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  display: block;
  letter-spacing: 0.52px;
}
</style>
