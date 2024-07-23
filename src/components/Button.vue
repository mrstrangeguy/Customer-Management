<template>
  <button
    :class="{ 'button-default': true, [variant]: true }"
    :style="{ background: bgColor }"
  >
    <i
      :class="{
        'default-icon': true,
        [icon]: true,
        'enable-right-margin': isMarginRightEnabled(),
      }"
    ></i>
    <span :class="{ 'text-style': true }">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
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

//functions
const isMarginRightEnabled = () => {
  return props.variant === "common common--primary";
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

.button-icon-type-1,
.button-icon-type-2 {
  color: rgba(0, 0, 0, 0.87);

  &::before {
    display: block;
  }
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

.button-icon-type-1 {
  margin-right: 4px;
  color: white;
}

.text-style {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  display: block;
  letter-spacing: 0.52px;
}
</style>
