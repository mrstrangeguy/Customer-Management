<template>
  <div class="relative z-100 cursor-pointer w-fit">
    <div
      v-if="!profileURL"
      class="relative overflow-hidden flex py-1.5 z-50 rounded-sm transition-all cursor-pointer pl-3 pr-2 w-fit hover:bg-hover"
      @click="toggleContentVisibility"
      role="button"
    >
      <i
        v-if="icon"
        :class="{
          'default-icon block font-normal block w-4 text-base leading-4 align-middle text-center': true,
          [icon]: true,
        }"
      />
      <span
        id="heading-text"
        class="block text-title leading-4.5 text-black font-medium tracking-title"
        >{{ text }}
      </span>
      <i
        :class="{
          'default-icon ml-1 block w-4 text-base leading-4 text-center align-middle': true,
          [arrowIcon]: true,
        }"
      />
    </div>
    <img
      v-if="profileURL"
      class="block w-7 h-7 object-cover object-top aspect-square border rounded-full"
      :src="profileURL"
      alt="profile-img"
      @click="toggleContentVisibility"
    />
    <div
      :class="{
        'absolute cursor-pointer bg-white transition-all duration-200 border-b w-auto p-px shadow-dropdown1': true,
        'opacity-100 z-150': isHeaderClicked,
        'opacity-0 z-behind': !isHeaderClicked,
        'top-7 left-0': !profileURL,
        'right-0': profileURL,
      }"
    >
      <slot name="dropdown-items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

//types
type OptionsDropdownProps = {
  text: string;
  arrowIcon: string;
  icon: string;
  profileURL: string;
};

withDefaults(defineProps<OptionsDropdownProps>(), {
  arrowIcon: "",
  icon: "",
  profileURL: "",
  text: "",
});

const isHeaderClicked = ref(false);

const toggleContentVisibility = () => {
  isHeaderClicked.value = !isHeaderClicked.value;
};
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
