<template>
  <div class="h-full overflow-hidden">
    <div class="z-50">
      <header-container />
    </div>
    <div class="contents-wrapper relative flex">
      <div
        :class="['h-full hidden extra-small:block', { 'pr-12': isResponsive }]"
      >
        <side-bar-container
          :is-expanded="isSidebarExpanded"
          :class="{ 'absolute z-150': isResponsive }"
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
        <individual-profile-container :user-detail="currentProfileDetails" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import SideBarContainer from "../containers/SideBarContainer.vue";
import HeaderContainer from "../containers/HeaderContainer.vue";
import HeaderPanel from "../containers/HeaderPanel.vue";
import IndividualProfileContainer from "../containers/IndividualProfileContainer.vue";
import CustomerTable from "../components/CustomerTable.vue";
import uiData from "../data/uiData.json";
import UsersData from "../data/usersData.json";
import { UserDetail } from "../types/table";

const { users } = UsersData.userDetails;

const isSidebarExpanded = ref<boolean>(true);
const isResponsive = ref<boolean>(false);
const profileWrapperPosition = ref<string>("-100%");
const currentProfileDetails = ref<UserDetail>(users[0]);

//onMounted
onMounted(() => {
  window.addEventListener("resize", onResponsive);
});

const onResponsive = () => {
  if (window.innerWidth <= 1200 && window.innerWidth >= 0) {
    isResponsive.value = true;
  } else {
    isResponsive.value = false;
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
  width: 350px;
  height: 100%;
  box-shadow:
    0 0 6px 0 rgba(0, 0, 0, 0.04),
    0 4px 4px 0 rgba(0, 0, 0, 0.12);
}

@media screen and (max-width: 480px) {
  .profile-container-wrapper {
    width: 100%;
  }
}
</style>
