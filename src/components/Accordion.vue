<template>
  <div
    :class="['cursor-pointer z-100 relative', { shadow: !isPrimaryVariant }]"
  >
    <div
      :class="[
        'z-100 relative flex items-center justify-between',
        {
          'py-2.25 pr-4 bg-zinc-100': isPrimaryVariant,
          'py-1.5 pl-2.75 pr-2.5 text-3.25 min-h-10': !isPrimaryVariant,
        },
      ]"
      @click.stop="toggleContentVisibility"
      role="button"
    >
      <div class="flex items-center icon-text-wrapper">
        <i
          v-if="mainIcon"
          :class="[
            'accordion-icon default-icon block w-12 leading-4 text-center',
            mainIcon,
          ]"
        />
        <span
          :class="[
            {
              'text-3.25 font-bold leading-3.75 block -mt-px': isPrimaryVariant,
            },
          ]"
        >
          {{ text }}
        </span>
      </div>
      <i
        :class="[
          'default-icon',
          {
            'text-4.5 block h-4.5 arrow-icon--primary leading-4.5 dx-treeview-toggle-item-visibility':
              isPrimaryVariant,
            'text-base arrow-icon--secondary font-normal leading-4 dx-accordion-item-title':
              !isPrimaryVariant,
            'dx-treeview-toggle-item-visibility-opened': isExpanded,
          },
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
type Props = {
  mainIcon?: string;
  text?: string;
  variant?: string;
  isExpanded?:boolean;
};

const props = withDefaults(defineProps<Props>(), {
  mainIcon: "",
  text: "",
  variant: AccordionVariants.Primary,
  isExpanded:false
});

//computed
const isPrimaryVariant = computed(
  () => props.variant === AccordionVariants.Primary
);

//functions
const contentRef = ref<HTMLElement>();
const contentHeight = ref<string>("0px");

const toggleContentVisibility = () => {
  isHeaderClicked.value = !isHeaderClicked.value;

  if(props.isExpanded)
  if (contentHeight.value === "0px") {
    contentHeight.value = String(contentRef?.value?.scrollHeight) + "px";
  } else {
    contentHeight.value = "0px";
  }
};
</script>

<style lang="scss" scoped>
.accordion-icon {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.87);
}

.arrow-icon {
  &--primary {
    color: rgba(0, 0, 0, 0.54);
  }

  &--secondary {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
