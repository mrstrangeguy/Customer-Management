<template>
  <div class="h-full overflow-hidden">
    <div class="z-50">
      <header-container @menu-click="toggleSidebarWidth" />
    </div>
    <div class="contents-wrapper relative flex">
      <div
        :style="{
          left:
            isExtraSmallScreen && isSidebarExpanded === false ? '-100%' : '0%',
        }"
        :class="[
          'h-full side-bar-wrapper',
          { 'absolute left-0': isExtraSmallScreen },
          { 'pr-12': isSmallerScreen && !isExtraSmallScreen },
        ]"
      >
        <side-bar-container
          :is-expanded="isExtraSmallScreen || isSidebarExpanded"
          :class="{ 'absolute z-150': isSmallerScreen }"
        />
      </div>
      <div class="px-8 w-full">
        <div>
          <header-panel />
        </div>
        <div class="table-container overflow-y-auto">
          <customer-table
            @select-data="handleDataSelection"
            :user-attributes="uiData.usersPageData.userAttributes"
            :users-details="UsersData.userDetails.users"
          />
        </div>
      </div>
      <div
        class="profile-container-wrapper absolute bg-white z-100 h-full z-150 transition-all duration-700 overflow-y-auto"
        :style="{ right: profileWrapperPosition }"
      >
        <individual-profile-container
          @close-button-click="handleCloseButtonClick"
          :user-detail="currentProfileDetails"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import SideBarContainer from "../containers/SidebarContainer.vue";
import HeaderContainer from "../containers/HeaderContainer.vue";
import HeaderPanel from "../containers/HeaderPanel.vue";
import IndividualProfileContainer from "../containers/IndividualProfileContainer.vue";
import CustomerTable from "../components/CustomerTable.vue";
import uiData from "../data/uiData.json";
import UsersData from "../data/usersData.json";
import { UserDetail } from "../types/table";

const { users } = UsersData.userDetails;

const isSidebarExpanded = ref<boolean>(true);
const isSmallerScreen = ref<boolean>(false);
const isExtraSmallScreen = ref<boolean>(false);
const profileWrapperPosition = ref<string>("-100%");
const currentProfileDetails = ref<UserDetail>(users[0]);

//onMounted
onMounted(() => {
  onResponsive();
  window.addEventListener("resize", onResponsive);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResponsive);
});

const onResponsive = () => {
  if (window.innerWidth <= 1200 && window.innerWidth >= 0) {
    isSmallerScreen.value = true;
    isSidebarExpanded.value = false;

    if (window.innerWidth <= 600) {
      isExtraSmallScreen.value = true;
    } else {
      isExtraSmallScreen.value = false;
    }
  } else {
    isSmallerScreen.value = false;
  }
};

const toggleSidebarWidth = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value;
};

const handleDataSelection = (data: UserDetail) => {
  toggleProfilWrapperPosition("0%");

  currentProfileDetails.value = data;
};

const toggleProfilWrapperPosition = (value: string) => {
  profileWrapperPosition.value = value;
};

const handleCloseButtonClick = () => {
  toggleProfilWrapperPosition("-100%");
};
</script>

<style scoped>
.table-container::-webkit-scrollbar {
  display: none;
}

.table-container {
  height: calc(100% - 86px);
}

.contents-wrapper {
  height: calc(100% - 56px);
}

.profile-container-wrapper {
  scrollbar-width: none;
  width: 350px;
  height: 100%;
  box-shadow:
    0 0 6px 0 rgba(0, 0, 0, 0.04),
    0 4px 4px 0 rgba(0, 0, 0, 0.12);
}

@media screen and (max-width: 590px) {
  .side-bar-wrapper {
    transition: all 0.5s ease;
  }
}

@media screen and (max-width: 480px) {
  .profile-container-wrapper {
    width: 100%;
  }
}
</style>
