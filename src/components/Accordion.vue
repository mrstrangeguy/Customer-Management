<template>
  <div
    :class="{
      'cursor-pointer z-100 relative': true,
      shadow: !isPrimaryVariant,
    }"
  >
    <div
      :class="{
        'z-100 relative flex items-center justify-between': true,
        'py-2.25 pr-4 bg-zinc-100': isPrimaryVariant,
        'py-1.5 pl-2.75 pr-2.5 text-3.25 min-h-10': !isPrimaryVariant,
      }"
      @click.stop="toggleContentVisibility"
      role="button"
    >
      <div class="flex items-center">
        <i
          v-if="mainIcon"
          :class="{
            'default-icon block w-12 leading-4 text-center': true,
            [mainIcon]: true,
          }"
        />
        <span
          :class="{
            'text-3.25 font-bold leading-3.75 block': isPrimaryVariant,
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
          'text-4.5 block h-4.5 text-gray-400 leading-4.5 dx-treeview-toggle-item-visibility':
            isPrimaryVariant,
          'dx-treeview-toggle-item-visibility-opened': isHeaderClicked,
        }"
      />
    </div>
    <div
      ref="contentRef"
      :class="{
        'relative overflow-hidden transition-all': true,
        'max-h-1000 duration-1200 ease-in': isHeaderClicked,
        'max-h-0 duration-1500 ease-out': !isHeaderClicked,
      }"
      :style="{ height: contentHeight }"
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
