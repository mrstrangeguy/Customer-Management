<template>
  <div :class="['h-8', !isColumn && 'flex items-center']">
    <i
      v-if="icon"
      :class="['default-icon block leading-5 text-center', icon, iconStyle]"
    />
    <span class="block text-2.5 leading-2.5 text-black">{{ label }}</span>
    <div :class="['text-xs', textStyle]">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
type IconTextFieldProps = {
  icon?: string;
  label?: string;
  text?: string;
  textStyle?: string;
  iconStyle?: string;
  isColumn?: boolean;
};

withDefaults(defineProps<IconTextFieldProps>(), {
  icon: "",
  label: "",
  text: "",
  textStyle: "",
  iconStyle: "",
  isColumn: false,
});
</script>
