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
      <div class="sm:block hidden w-45 flex items-center mr-4">
        <Search placeholder-text="Search" />
      </div>
      <div class="px-px">
        <Button variant="Icon" icon="dx-icon dx-icon-moon" />
      </div>
      <div class="pl-1.5 pr-px">
        <Button variant="Icon" icon="dx-icon dx-icon-belloutline" />
      </div>
      <div class="sm:block hidden pl-2.5">
        <options-dropdown
          profileURL="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png"
        />
      </div>
      <div class="sm:hidden block pl-1.75">
        <Button variant="Icon" icon="dx-icon dx-icon-overflow" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import Search from "../components/Search.vue";
import OptionsDropdown from "../components/OptionsDropdown.vue";
</script>

<style scoped></style>
