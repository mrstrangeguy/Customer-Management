<script setup lang="ts">
import Button from "./components/Button.vue";
import { ButtonVariants } from "./Constants";
</script>

<template>
  <Button
    text="Add Contact"
    :variant="ButtonVariants.Normal"
    icon="dx-icon dx-icon-plus"
    bg-color="#03a9f4"
  />
</template>

<style lang="scss" scoped></style>
