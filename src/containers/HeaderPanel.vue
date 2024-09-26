<template>
  <div class="p-6 flex items-center justify-between">
    <div class="flex items-center">
      <div class="h-9.5 flex items-center">
        <span class="block text-2xl leading-7 pr-7">
          {{ title }}
        </span>
      </div>
      <div class="mt-1">
        <Dropdown
          :text="filterDropdownTitle"
          header-style="pl-3 pr-2 py-1.25 hover:bg-gray-200"
          :drop-down-items="filterDropDown.userStatuses"
          @click="handleDropdownClick"
        />
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex items-center justify-end">
        <div class="hidden extra-small:block">
          <Button
            :icon="addButton.icon"
            bg-color="rgb(3, 169, 244)"
            :text="addButton.text"
            button-style="custom-button--normal text-white"
          />
        </div>
        <div class="pl-1.5 hidden extra-small:block">
          <Button
            :icon="refresh"
            hover-bg="rgba(0, 0, 0, 0.08)"
            is-rounded
            button-style="text-black custom-button"
          />
        </div>
        <div class="h-6 ml-1.25 w-px bg-gray-300 hidden extra-small:block" />
        <div class="pl-1.25 hidden sm:block">
          <Dropdown
            :icon="exportIcon"
            header-style="pl-3 pr-2 py-1.5 hover:bg-gray-200"
            :drop-down-items="filterDropDown.userStatuses"
          />
        </div>
        <div class="h-6 ml-1.25 w-px bg-gray-300 hidden sm:block" />
        <div class="pl-1.25 hidden sm:block">
          <Button
            :icon="chooser"
            hover-bg="rgba(0, 0, 0, 0.08)"
            is-rounded
            button-style="text-black custom-button"
          />
        </div>
        <div class="pl-1.25 md:block hidden">
          <div class="w-40 ml-4">
            <search-input
              :placeholder="searchbarPlaceholder"
              @input="getInputValue"
            />
          </div>
        </div>
        <div class="block md:hidden pl-4">
          <Button
            :icon="overflow"
            hover-bg="rgba(0, 0, 0, 0.08)"
            is-rounded
            button-style="text-black custom-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usersPageData } from "../data/uiData.json";
import Dropdown from "../components/Dropdown.vue";
import Button from "../components/Button.vue";
import SearchInput from "../components/SearchInput.vue";
import { ref } from "vue";

const {
  addButton,
  filterDropDown,
  searchbarPlaceholder,
  title,
  exportOptionsDetails,
} = usersPageData;
const { chooser, exportIcon, overflow, refresh } = usersPageData.icons;

const filterDropdownTitle = ref<string>(filterDropDown.title);

const emit = defineEmits<{
  (event: "input-value", inputValue: string): void;
  (event: "dropdown-value", dropdownValue: string): void;
}>();

const getInputValue = (value: string) => {
  emit("input-value", value);
};

const handleDropdownClick = (value: string) => {
  filterDropdownTitle.value = value.toUpperCase();
  emit("dropdown-value", value);
};
</script>

<style lang="scss" scoped>
.custom-button {
  box-shadow: none;
  padding: 0px 6px;

  &--normal {
    padding: 5px 12px 5px 8px;
    font-size: 13px;
    letter-spacing: 0.52px;
  }
}
</style>
