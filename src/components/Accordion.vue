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
      @click.stop="toggleContentVisibility(id)"
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
      :style="{
        height: isExpanded ? contentHeight : CONTENT_CONTRACTED_HEIGHT,
      }"
    >
      <slot name="dropdown-items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { AccordionVariants } from "../Constants";

//types
type Props = {
  mainIcon?: string;
  text?: string;
  variant?: string;
  isExpanded?: boolean;
  id?: number;
};

const props = withDefaults(defineProps<Props>(), {
  id: 1,
  mainIcon: "",
  text: "",
  variant: AccordionVariants.Primary,
  isExpanded: false,
});

//emits
const emit = defineEmits<{
  (event: "accordion-click", accordionId: number): void;
}>();

onMounted(() => {
  contentHeight.value = `${contentRef?.value?.scrollHeight}px` || CONTENT_CONTRACTED_HEIGHT;
});

//constants
const CONTENT_CONTRACTED_HEIGHT = "0px";

//refs
const contentRef = ref<HTMLDivElement | null>(null);
const contentHeight = ref<string>(CONTENT_CONTRACTED_HEIGHT);

//computed
const isPrimaryVariant = computed(
  () => props.variant === AccordionVariants.Primary
);

//functions
const toggleContentVisibility = (accordionId: number) => {
  emit("accordion-click", accordionId);
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
