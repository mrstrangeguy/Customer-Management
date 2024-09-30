<template>
  <div class="h-full relative overflow-hidden">
    <div>
      <header-container @menu-click="toggleSidebarWidth" />
    </div>
    <div class="contents-wrapper relative flex">
      <div
        :class="[
          'dark-overlay',
          {
            'opacity-0 invisible': !isSidebarExpanded,
            'opacity-1 visible': isSidebarExpanded,
          },
        ]"
      />
      <div
        :class="[
          'h-full side-bar-wrapper',
          {
            'sidebar-wrapper-hidden': !isSidebarExpanded,
          },
        ]"
      >
        <side-bar-container :is-expanded="isSidebarExpanded" class="sidebar" />
      </div>
      <div class="px-8 w-full">
        <div>
          <header-panel
            @dropdown-value="handleDropdownClick"
            @input-value="handleInputValueChange"
          />
        </div>
        <div class="table-container overflow-y-auto">
          <customer-table
            :user-status="userStatus"
            :filter-text="filterText"
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
const profileWrapperPosition = ref<string>("-100%");
const currentProfileDetails = ref<UserDetail>(users[0]);
const userStatus = ref<string>("All");
const filterText = ref<string>("");

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
    isSidebarExpanded.value = false;
  } else {
    isSidebarExpanded.value = true;
  }
};

const handleDropdownClick = (status: string) => {
  userStatus.value = status;
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

const handleInputValueChange = (searchText: string) => {
  filterText.value = searchText;
};
</script>

<style lang="scss" scoped>
.table-container::-webkit-scrollbar {
  display: none;
}

.table-container {
  height: calc(100% - 86px);
}

.contents-wrapper {
  height: calc(100% - 56px);
  z-index: 10;
}

.profile-container-wrapper {
  z-index: 12;
  scrollbar-width: none;
  width: 350px;
  height: 100%;
  box-shadow:
    0 0 6px 0 rgba(0, 0, 0, 0.04),
    0 4px 4px 0 rgba(0, 0, 0, 0.12);
}

.dark-overlay {
  display: none;
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
  z-index: 11;
}

.side-bar-wrapper {
  z-index: 13;
}

@media screen and (max-width: 1200px) {
  .dark-overlay {
    display: block;
  }

  .side-bar-wrapper {
    padding-right: 48px;
  }

  .sidebar {
    position: absolute;
    z-index: 11;
  }
}

@media screen and (max-width: 665px) {
  .side-bar-wrapper {
    padding-right: 0px;
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
  }

  .sidebar-wrapper-hidden {
    left: -100%;
  }
}

@media screen and (max-width: 480px) {
  .profile-container-wrapper {
    width: 100%;
  }
}
</style>
