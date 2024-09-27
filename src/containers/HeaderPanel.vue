<template>
  <div class="p-6 flex items-center justify-between">
    <div class="flex items-center">
      <div class="h-9.5 flex items-center">
        <span class="header-panel-title block">
          {{ title }}
        </span>
      </div>
      <div class="status-dropdown-wrapper mt-px">
        <Dropdown
          :text="filterDropdownTitle"
          header-style="dropdown-header hover:bg-gray-200"
          :drop-down-items="filterDropDown.userStatuses"
          @click="handleDropdownClick"
        />
      </div>
    </div>
    <div class="header-panel-buttons-wrapper flex items-center">
      <div class="flex items-center justify-end">
        <div class="hidden extra-small:block">
          <Button
            :icon="addButton.icon"
            bg-color="rgb(3, 169, 244)"
            :text="addButton.text"
            button-style="custom-button--normal text-white"
          />
        </div>
        <div class="pl-1.25 hidden extra-small:block">
          <Button
            :icon="refresh"
            hover-bg="rgba(0, 0, 0, 0.08)"
            is-rounded
            button-style="text-black custom-button"
          />
        </div>
        <div class="h-6 ml-1.25 w-px bg-gray-300 hidden extra-small:block" />
        <div class="pl-1.25 hidden sm:block mt-px">
          <Dropdown
            :icon="exportIcon"
            header-style="dropdown-header icon-dropdown hover:bg-gray-200"
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
          <div class="header-panel-search-wrapper w-40">
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
import { ref } from "vue";

import { usersPageData } from "../data/uiData.json";
import Dropdown from "../components/Dropdown.vue";
import Button from "../components/Button.vue";
import SearchInput from "../components/SearchInput.vue";

const { addButton, filterDropDown, searchbarPlaceholder, title } =
  usersPageData;
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

<style lang="scss">
.custom-button {
  box-shadow: none;
  padding: 0px 6px;

  &--normal {
    padding: 5px 12px 5px 8px;
    font-size: 13px;
    letter-spacing: 0.52px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px 0px;
  }
}

.header-panel-title {
  font-size: 22px;
  line-height: 28.2854px;
  padding-right: 30px;
}

.header-panel-buttons-wrapper {
  padding-left: 15px;
}

.header-panel-search-wrapper {
  margin-left: 15px;
}

.dropdown-header {
  padding: 5px 8px 5px 12px;
  height: 28px;
}

.icon-dropdown {
  padding-left: 8px;
}

@media screen and (max-width: 380px) {
  .status-dropdown-wrapper {
    display: none;
  }
}
</style>
