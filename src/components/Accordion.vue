<template>
  <div
    :class="{
      'cursor-pointer z-100 relative': true,
      shadow: variant === DropdownVariants.Secondary,
    }"
  >
    <div
      :class="{
        'dropdown-header z-100 relative': true,
        'py-2.25 pr-4 bg-zinc-100': variant === DropdownVariants.Primary,
        'py-1.5 pl-2.75 pr-2.5 text-3.25 min-h-10':
          variant !== DropdownVariants.Primary,
      }"
      @click.stop="toggleContentVisibility"
      role="button"
    >
      <div class="dropdown-header__content">
        <i :class="{ 'default-icon': true, [mainIcon]: true }" />
        <span
          :class="{
            'text-3.25 font-bold leading-3.75':
              props.variant === DropdownVariants.Primary,
          }"
          >{{ text }}</span
        >
      </div>
      <i
        :class="{
          'default-icon': true,
          'text-base text-black font-normal leading-4 dx-accordion-item-title':
            variant === DropdownVariants.Secondary,
          'text-4.5 block h-4.5 leading-4.5 dx-treeview-toggle-item-visibility':
            variant !== DropdownVariants.Secondary,
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
import { ref } from "vue";

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

const toggleContentVisibility = () => {
  isHeaderClicked.value = !isHeaderClicked.value;
};
</script>

<style lang="scss" scoped>
.dropdown-header {
  display: flex;
  align-items: center;
  gap: 12px;

  &__content {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
}
</style>

<!-- <Dropdown
header-style="py-[9px] pr-4 bg-[#0000000a]"
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

<Dropdown
header-style="py-[9px] pr-4 bg-[#0000000a]"
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
</template>
</Dropdown>

<Dropdown
container-style="shadow-[0_2px_4px_0_rgba(0,0,0,.2)]"
header-style="py-1.5 pl-[11px] pr-2.5 text-[13px] min-h-10"
arrow-icon="text-base text-[rgba(0, 0, 0, 0.87)] font-normal leading-4"
text="Opportunities"
>
<template v-slot:dropdown-items>
  <div class="p-[11px]">
    <div class="pb-2.5">
      <span class="block text-[13px] leading-[16.7141px]"
        >Incoming Request for Conference Room</span
      >
      <span class="block text-[13px] leading-[16.7141px]">$2,115</span>
    </div>
    <div class="pb-[10px]">
      <span class="block text-[13px] leading-[16.7141px]"
        >Incoming Request for Conference Room</span
      >
      <span class="block text-[13px] leading-[16.7141px]">$2,115</span>
    </div>
  </div>
</template>
</Dropdown> -->
