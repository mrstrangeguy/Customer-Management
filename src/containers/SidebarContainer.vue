<template>
  <div
    class="sidebar-wrapper relative w-full h-full overflow-hidden transition-all duration-500"
    :style="{ width: isExpanded ? '250px' : '48px' }"
  >
    <div
      class="accordion-group-wrapper h-full overflow-y-auto bg-sidebar pt-4 pb-17.5"
    >
      <div v-for="sidebar in sideBarItems" class="border-b">
        <Accordion
          :text="sidebar.title"
          :main-icon="sidebar.main"
          :id="sidebar.id"
          :is-expanded="sidebar.isExpanded"
          @accordion-click="handleAccordionClick"
        >
          <template v-slot:dropdown-items>
            <div
              v-for="subMenuItem in sidebar.subMenuItems"
              class="py-2.25 pr-4 flex items-center"
            >
              <span class="block pl-12 text-3.25 accordion-content-text">
                {{ subMenuItem.title }}
              </span>
            </div>
          </template>
        </Accordion>
      </div>
    </div>
    <div
      :class="[
        'sidebar-footer absolute text-gray-500 Z-50 bottom-0 left-0 w-full text-3.25 text-sidebar-text leading-4 bg-zinc-100',
        {
          'opacity-1 delay-200 transition-all duration-500': isExpanded,
          'opacity-0': !isExpanded,
        },
      ]"
    >
      {{ copyrightText }}
      <br />
      {{ companyName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

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
  id: number;
  title: string;
  main: string;
  isExpanded: boolean;
  subMenuItems: SubMenuItem[];
};

const props = withDefaults(defineProps<Props>(), {
  id: 1,
  isExpanded: true,
});

const { copyrightText, companyName } = UiData.sidebarFooterTexts;
const sideBarItems = ref<SideBarItem[]>(UiData.sidebarMenuItems);

//emit
const emit = defineEmits<{
  (event: "accordion-click", isExpanded: boolean): void;
}>();

//functions
const handleAccordionClick = (accordionId: number) => {
  const currentAccordionData = sideBarItems.value.find(
    (sidebar) => sidebar.id === accordionId
  );

  if (!currentAccordionData) return;
  currentAccordionData.isExpanded = !currentAccordionData?.isExpanded;
  emit("accordion-click", props.isExpanded);
};

const setAllAccordions = (value: boolean) => {
  sideBarItems.value.forEach((sidebar) => (sidebar.isExpanded = value));
};

//watchEffect
watchEffect(() => {
  console.log("working 2");
  if (!props.isExpanded) {
    setAllAccordions(false);
  } else {
    sideBarItems.value[0].isExpanded = true;
  }
});
</script>

<style>
.accordion-group-wrapper {
  padding-bottom: 70px;
  scrollbar-width: none;
}

.sidebar-wrapper {
  background-color: rgb(242, 242, 242);
}

.accordion-content-text {
  line-height: 18px;
}

.sidebar-footer {
  padding: 20px 0px 16px 15px;
  line-height: 17px;
}
</style>
