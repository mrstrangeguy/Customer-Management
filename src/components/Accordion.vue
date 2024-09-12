<template>
  <div
    :class="['cursor-pointer z-100 relative', !isPrimaryVariant && 'shadow']"
  >
    <div
      :class="[
        'z-100 relative flex items-center justify-between',
        isPrimaryVariant
          ? 'py-2.25 pr-4 bg-zinc-100'
          : 'py-1.5 pl-2.75 pr-2.5 text-3.25 min-h-10',
      ]"
      @click.stop="toggleContentVisibility"
      role="button"
    >
      <div class="flex items-center">
        <i
          v-if="mainIcon"
          :class="['default-icon block w-12 leading-4 text-center', mainIcon]"
        />
        <span
          :class="[
            isPrimaryVariant && 'text-3.25 font-bold leading-3.75 block',
          ]"
        >
          {{ text }}
        </span>
      </div>
      <i
        :class="[
          'default-icon',
          isPrimaryVariant
            ? 'text-4.5 block h-4.5 text-gray-400 leading-4.5 dx-treeview-toggle-item-visibility'
            : 'text-base text-black font-normal leading-4 dx-accordion-item-title',
          isHeaderClicked && 'dx-treeview-toggle-item-visibility-opened',
        ]"
      />
    </div>
    <div
      ref="contentRef"
      class="relative overflow-hidden transition-all duration-500"
      :style="{ height: contentHeight }"
    >
      <slot name="dropdown-items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { AccordionVariants } from "../Constants";

//refs
const isHeaderClicked = ref(false);

//types
type props = {
  mainIcon?: string;
  text?: string;
  variant?: string;
};

const props = withDefaults(defineProps<props>(), {
  mainIcon: "",
  text: "",
  variant: AccordionVariants.Primary,
});

//computed
const isPrimaryVariant = computed(() => props.variant === AccordionVariants.Primary);

//functions

const contentRef = ref<HTMLElement>();
const contentHeight = ref<string>("0px");

const toggleContentVisibility = () => {
  isHeaderClicked.value = !isHeaderClicked.value;

  if (contentHeight.value === "0px") {
    contentHeight.value = String(contentRef?.value?.scrollHeight) + "px";
  } else {
    contentHeight.value = "0px";
  }
};
</script>
