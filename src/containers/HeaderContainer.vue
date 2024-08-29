<template>
  <div class="w-full py-2.5 bg-white flex justify-between shadow-header">
    <div class="flex items-center">
      <div class="w-12 h-9.5 flex">
        <div class="p-1.25 flex justify-center items-center w-full">
          <Button icon="dx-icon dx-icon-menu" variant="Icon" />
        </div>
      </div>
      <div>
        <span class="block leading-leading1 text-4 font-medium"
          >UI Template Gallery</span
        >
      </div>
    </div>
    <div class="flex items-center pr-6">
      <div class="w-45 flex items-center mr-3.5">
        <Search placeholder-text="Search" />
      </div>
      <div class="px-px">
        <Button variant="Icon" icon="dx-icon dx-icon-moon" />
      </div>
      <div class="pl-1.5 pr-px">
        <Button variant="Icon" icon="dx-icon dx-icon-belloutline" />
      </div>
      <div class="w-9.5"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import Search from "../components/Search.vue";
</script>

<style scoped></style>
