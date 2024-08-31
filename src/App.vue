<script setup lang="ts">
import { ButtonVariants } from "./Constants";
import Button from "./components/Button.vue";
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
