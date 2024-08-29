<template>
  <div class="w-full h-full overflow-hidden">
    <div class="relative w-sidebar h-full bg-sidebar pt-4 pb-17.5">
      <div>
        <Dropdown
          v-for="item in sideBarItems"
          header-style="py-[9px] pr-4 hover:bg-[#0000000a]"
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
      </div>

      <div
        class="absolute bg-sidebar Z-50 bottom-0 left-0 w-full pt-5 py-4 pl-3.75 text-3.25 text-sidebar-text leading-sidebar-footer"
      >
        Copyright © 2024
        <br />
        Developer Express Inc.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import uiData from "../data/uiData.json";
import Dropdown from "../components/Dropdown.vue";

const sideBarItems = ref();

onMounted(() => {
  sideBarItems.value = uiData.sidebarMenuItems;
});
</script>

<style scoped>
.g {
  color: #0000009b;
}
</style>
