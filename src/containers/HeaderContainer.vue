<template>
  <div class="w-full py-2.5 bg-white flex justify-between shadow-header">
    <div class="flex items-center">
      <div class="w-12 h-9.5 flex">
        <div class="p-1.25 flex justify-center items-center w-full">
          <Button
            :icon="menuIcon"
            is-rounded
            hover-bg="rgba(0, 0, 0, 0.08)"
            button-style="custom-button"
            @button-click="handleMenuButtonClick"
          />
        </div>
      </div>
      <div class="header-title-wrapper">
        <span
          class="header-title block leading-leading1 text-4 font-medium overflow-hidden text-ellipsis text-nowrap"
        >
          {{ title }}
        </span>
      </div>
    </div>
    <div class="flex items-center pr-6 pl-4">
      <div class="search-container sm:block hidden w-45 flex items-center mr-4">
        <SearchInput :placeholder="searchPlaceholder" />
      </div>
      <div class="-mr-px">
        <Button
          :icon="displayMode.darkModeIcon"
          is-rounded
          hover-bg="rgba(0, 0, 0, 0.08)"
          button-style="custom-button"
        />
      </div>
      <div class="pl-1.5">
        <Button
          :icon="notification"
          is-rounded
          hover-bg="rgba(0, 0, 0, 0.08)"
          button-style="custom-button"
        />
      </div>
      <div class="sm:block hidden pl-2.5">
        <Dropdown
          :image-u-r-l="userProfileData.profileImg"
          :drop-down-items="userProfileData.details"
          should-hide-arrow-icon
        />
      </div>
      <div class="sm:hidden block pl-1.75">
        <Button
          :icon="icons.overflow"
          is-rounded
          button-style="custom-button"
          hover-bg="rgba(0, 0, 0, 0.08)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import SearchInput from "../components/SearchInput.vue";
import Dropdown from "../components/Dropdown.vue";
import uiData from "../data/uiData.json";

const { userProfileData, icons } = uiData.usersPageData;
const { title, menuIcon, displayMode, notification, searchPlaceholder } =
  uiData.headerNavData;

const emit = defineEmits<{
  (event: "menu-click", clickEvent: Event): void;
}>();

const handleMenuButtonClick = (event: Event) => {
  emit("menu-click", event);
};
</script>

<style lang="scss">
.search-container {
  width: 180px;
}

.custom-button {
  box-shadow: none;
  padding: 0px 6px;
  color: rgba(0, 0, 0, 0.87);
}

.header-title {
  color: rgba(0, 0, 0, 0.87);
}

@media screen and (max-width: 320px) {
  .header-title-wrapper {
    max-width: 100px;
    flex-shrink: 1;
  }
}
</style>
