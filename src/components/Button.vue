<template>
  <button
    :class="{ 'button-default': true, [currentClass()]: true }"
    :style="{ background: bgColor }"
  >
    <i
      :class="{
        'default-icon': true,
        [icon]: true,
      }"
    />
    <span class="text-style">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { Buttonvariants } from "../types/buttonTypes";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "common common--primary",
  },
  bgColor: String,
});

//computed
const currentClass = () => {
  if (props.variant === Buttonvariants.COMMONSECONDARY) {
    return "common common--secondary";
  } else if (props.variant === Buttonvariants.ICON) {
    return "icon";
  }

  return "common common--primary";
};
</script>

<style lang="scss" scoped>
.button-default {
  cursor: pointer;
  background-color: transparent;
}

.default-icon {
  font-size: 16px;
  display: block;
}

.enable-right-margin {
  margin-right: 4px;
}

.button-default.common {
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;

  &--primary {
    padding: 5px 12px 5px 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
    height: 28px;
    color: white;

    .default-icon {
      margin-right: 4px;
    }
  }

  &--secondary {
    padding: 5px 12px;
    border: 1px solid rgba(0, 0, 0, 0.24);
    color: rgba(0, 0, 0, 0.87);
    min-width: 90px;
    justify-content: center;
    height: 26px;
  }
}

.button-default.icon {
  padding: 5px;
  border-radius: 50%;
  transition: 0.4s ease;

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
