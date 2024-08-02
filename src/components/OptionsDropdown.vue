<template>
  <div class="relative z-100">
    <div
      class="relative overflow-hidden flex py-[5px] z-50 rounded-sm transition-all cursor-pointer pl-3 pr-2 w-fit hover:bg-[rgba(0,0,0,.08)]"
      @click="toggleContentVisibility"
    >
      <i
        v-if="icon"
        :class="{
          [`default-icon block font-normal block h-[18px] w-4 text-base leading-4 align-middle text-center ${icon}`]: true,
        }"
      />
      <span
        class="block text-[13px] leading-[18px] text-black font-medium tracking-[0.52px]"
        >{{ text }}</span
      >
      <i
        :class="{
          [`default-icon ml-1 block h-[18px] w-4 text-base leading-4 text-center align-middle ${arrowIcon}`]: true,
        }"
      />
    </div>
    <img v-if="profileUrl" class="block w-[28px] h-[28px] object-cover object-top aspect-square border-px" :src="profileUrl" alt="profile-img">

    <div
      :class="{
        'absolute cursor-pointer bg-white transition-all duration-[200ms] border-b w-auto left-0 top-[26px] p-px shadow-[0_2px_4px_rgba(0,0,0,.2)]': true,
        'opacity-100 z-[1502]': isHeaderClicked,
        'opacity-0 z-[-1]': !isHeaderClicked,
      }"
    >
      <slot name="dropdown-items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  text: String,
  arrowIcon: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  profileUrl:{
    type:String,
    required:false
  }
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
