<script setup lang="ts">
import Button from "./components/Button.vue";
import Dropdown from "./components/Dropdown.vue";
import { ButtonVariants } from "./Constants";
</script>

<template>
  <Button
    text="Add Contact"
    :variant="ButtonVariants.Normal"
    icon="dx-icon dx-icon-plus"
    bg-color="#03a9f4"
  />

  <Dropdown
header-style="py-[9px] pr-4 bg-[#0000000a]"
main-icon="dx-icon dx-icon-user block text-black w-12 h-[18px] leading-[18px] text-[18px] text-center"
text-style="text-[13px] font-bold leading-[15px]"
text="CRM"
arrow-icon="text-[18px] block h-[18px] leading-[18px]"
>
<template v-slot:dropdown-items>
  <div class="py-[9px] pr-4 flex items-center bg-[#0000000a]">
    <span class="block pl-12 text-[13px] leading-[16.7141px]"
      >Contact List</span
    >
  </div>
  <div class="py-[9px] pr-4 flex items-center bg-[#0000000a]">
    <span class="block pl-12 text-[13px] leading-[16.7141px]"
      >Contact List</span
    >
  </div>
</template>
</Dropdown>
</template>

<style lang="scss" scoped></style>
