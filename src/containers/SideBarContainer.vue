<template>
  <div
    class="w-full h-full overflow-hidden bg-zinc-100 transition-all duration-500"
    :style="{ width: isExpanded ? '250px' : '48px' }"
  >
    <div class="relative h-full bg-sidebar pt-4 pb-17.5">
      <div>
        <Accordion
          v-for="item in sideBarItems"
          header-style="py-[9px] pr-4 hover:bg-[#0000000a]"
          main-icon="dx-icon dx-icon-user block text-black w-12 h-[18px] leading-[18px] text-[18px] text-center"
          text-style="text-[13px] font-bold leading-[15px]"
          text="CRM"
          arrow-icon="text-[18px] block h-[18px] leading-[18px]"
        >
          <template v-slot:dropdown-items>
            <div class="py-[9px] pr-4 flex items-center bg-[#0000000a]">
              <span class="block pl-12 text-[13px] leading-[16.7141px]">
                Contact List
              </span>
            </div>
            <div class="py-[9px] pr-4 flex items-center bg-[#0000000a]">
              <span class="block pl-12 text-[13px] leading-[16.7141px]">
                Contact List
              </span>
            </div>
          </template>
        </Accordion>
      </div>

      <div
        :class="{
          'absolute text-gray-500 Z-50 bottom-0 left-0 w-full pt-5 py-4 pl-4 text-xs text-sidebar-text leading-4': true,
          'opacity-1 delay-200 transition-all duration-500': isExpanded,
          'opacity-0': !isExpanded,
        }"
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
import Accordion from "../components/Accordion.vue";

type Props = {
  isExpanded?: boolean;
};

type SubMenuItem = {
  title: string;
  path: string;
};

type SideBarItem = {
  title: string;
  main: string;
  subMenuItems: SubMenuItem[];
};

withDefaults(defineProps<Props>(), {
  isExpanded: true,
});

const sideBarItems = ref<SideBarItem[]>();

onMounted(() => {
  sideBarItems.value = uiData.sidebarMenuItems;
  console.log(sideBarItems.value);
});
</script>

<style scoped></style>
