<template>
  <div
    :class="{
      'cursor-pointer z-100 relative': true,
      shadow: !isPrimaryVariant,
    }"
  >
    <div
      :class="{
        'dropdown-header z-100 relative': true,
        'py-2.25 pr-4 bg-zinc-100': isPrimaryVariant,
        'py-1.5 pl-2.75 pr-2.5 text-3.25 min-h-10': !isPrimaryVariant,
      }"
      @click.stop="toggleContentVisibility"
      role="button"
    >
      <div class="dropdown-header__content">
        <i :class="{ 'default-icon': true, [mainIcon]: true }" />
        <span
          :class="{
            'text-3.25 font-bold leading-3.75': isPrimaryVariant,
          }"
        >
          {{ text }}
        </span>
      </div>
      <i
        :class="{
          'default-icon': true,
          'text-base text-black font-normal leading-4 dx-accordion-item-title':
            !isPrimaryVariant,
          'text-4.5 block h-4.5 leading-4.5 dx-treeview-toggle-item-visibility':
            isPrimaryVariant,
          'dx-treeview-toggle-item-visibility-opened': isHeaderClicked,
        }"
      />
    </div>
    <div
      :class="{
        'dropdown__content relative overflow-hidden transition-all': true,
        'max-h-1000 duration-1200 ease-in': isHeaderClicked,
        'max-h-0 duration-1500 ease-out': !isHeaderClicked,
      }"
    >
      <slot name="dropdown-items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { DropdownVariants } from "../Constants";

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
  variant: DropdownVariants.Primary,
});

//computed
const isPrimaryVariant = computed(() => props.variant === DropdownVariants.Primary);

//functions
const toggleContentVisibility = () => isHeaderClicked.value = !isHeaderClicked.value;
</script>

<style lang="scss" scoped></style>

<!-- <options-dropdown
    text="ALL"
    arrow-icon="dx-icon dx-icon-spindown dx-icon-right"
  >
    <template v-slot:dropdown-items>
      <div class="w-[94.97px] bg-[rgba(0,0,0,.12)] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
    </template>
  </options-dropdown>

  <options-dropdown
    icon="dx-icon dx-icon-export"
    arrow-icon="dx-icon dx-icon-spindown dx-icon-right"
  >
    <template v-slot:dropdown-items>
      <div class="w-[94.97px] mt-1 flex w-[220.53px]">
        <div
          class="flex items-center text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
        >
          <div class="w-[29px]">
            <i
              class="default-icon font-medium text-[#0000008a] w-[18px] h-[18px] block dx-icon dx-icon-xlsxfile dx-list-item-icon text-[18px] leading-[18px]"
            ></i>
          </div>
          <div class="leading-[15px]">Export all data to Excel</div>
        </div>
      </div>
    </template>
  </options-dropdown> -->
