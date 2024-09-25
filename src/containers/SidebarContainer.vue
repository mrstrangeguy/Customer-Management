<template>
  <div
    class="w-full h-full overflow-hidden bg-zinc-100 transition-all duration-500"
    :style="{ width: isExpanded ? '250px' : '48px' }"
  >
    <div class="relative h-full bg-sidebar pt-4 pb-17.5">
      <div v-for="sideBarItem in sideBarItems" class="border-b">
        <Accordion :text="sideBarItem.title" :main-icon="sideBarItem.main">
          <template v-slot:dropdown-items>
            <div
              v-for="subMenuItem in sideBarItem.subMenuItems"
              class="py-2.25 pr-4 flex items-center"
            >
              <span class="block pl-12 text-3.25 leading-4">
                {{ subMenuItem.title }}
              </span>
            </div>
          </template>
        </Accordion>
      </div>
      <div
        :class="[
          'absolute text-gray-500 Z-50 bottom-0 left-0 w-full pt-5 py-4 pl-4 text-xs text-sidebar-text leading-4 bg-zinc-100',
          isExpanded
            ? 'opacity-1 delay-200 transition-all duration-500'
            : 'opacity-0',
        ]"
      >
        {{ copyrightText }}
        <br />
        {{ companyName }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import UiData from "../data/uiData.json";
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

const { copyrightText, companyName } = UiData.sidebarFooterTexts;
const sideBarItems = ref<SideBarItem[]>(UiData.sidebarMenuItems);
</script>
