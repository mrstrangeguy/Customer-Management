<template>
  <button
    :class="{ 'button-default': true, [currentButtonClass()]: true }"
    :style="{ backgroundColor: bgColor }"
  >
    <i :class="{ 'default-icon': true, [icon]: true }" />
    <span class="text-style">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
//types
interface ButtonsProps {
  text?: string;
  icon?: string;
  variant?: string;
  bgColor?: string;
}

enum Buttonvariants {
  PRIMARY = "Primary",
  SECONDARY = "Secondary",
  ICON = "Icon",
}

const props = withDefaults(defineProps<ButtonsProps>(), {
  text: "",
  icon: "",
  variant: "",
  bgColor: "",
});

//functions
const currentButtonClass = () => {
  if (props.variant === Buttonvariants.SECONDARY) {
    return "common-secondary";
  } else if (props.variant === Buttonvariants.ICON) {
    return "icon";
  }

  return "common-primary";
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
  border-radius: 2px;
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
    margin-right: 4px;
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
  min-width: 90px;
  justify-content: center;
  height: 26px;
}

.button-default.icon {
  padding: 5px;
  border-radius: 50%;
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
