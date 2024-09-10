<template>
  <div :class="{ 'h-8': true, 'flex items-center': !isColumn }">
    <i
      v-if="icon"
      :class="{
        'default-icon block leading-5 text-center text-zinc-200': true,
        [icon]: true,
        [iconStyle]: true,
      }"
    />
    <span class="block text-2.5 leading-2.5 text-black">{{ label }}</span>
    <div
      :class="{
        'text-xs': true,
        [textStyle]: true,
      }"
    >
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

<style scoped></style>

<!-- <Text title="Position" description="ACME" description-color="#03a9f4" />
<Text icon="dx-icon dx-icon-tel" description="sample5@gmail.com" /> -->
