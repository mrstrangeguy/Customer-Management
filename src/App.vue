<script setup lang="ts">
import { Buttonvariants } from "./types/ButtonVariants";
import Button from "./components/Button.vue";
</script>

<template>
  <Button
    text="Add Contact"
    :variant="Buttonvariants.Normal"
    icon="dx-icon dx-icon-plus"
    bg-color="#03a9f4"
  />
</template>

<style lang="scss" scoped></style>
