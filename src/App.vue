<script setup lang="ts">
import Dropdown from "./components/Dropdown.vue";
</script>

<template>
  <Dropdown
    header-style="py-[9px] pr-[16px] bg-[#0000000a]"
    main-icon="dx-icon dx-icon-user block text-black w-12 h-[18px] leading-[18px] text-[18px] text-center"
    text-style="text-[13px] font-bold leading-[15px]"
    text="CRM"
    arrow-icon="text-[18px] block h-[18px] leading-[18px]"
  >
    <template v-slot:dropdown-items>
      <div class="py-[9px] pr-[16px] flex items-center bg-[#0000000a]">
        <span class="block pl-12 text-[13px] leading-[16.7141px]"
          >Contact List</span
        >
      </div>
      <div class="py-[9px] pr-[16px] flex items-center bg-[#0000000a]">
        <span class="block pl-12 text-[13px] leading-[16.7141px]"
          >Contact List</span
        >
      </div>
    </template>
  </Dropdown>

  <Dropdown
    header-style="py-[9px] pr-[16px] bg-[#0000000a]"
    main-icon="dx-icon dx-icon-user block text-black w-12 h-[18px] leading-[18px] text-[18px] text-center"
    text-style="text-[13px] font-bold leading-[15px]"
    text="CRM"
    arrow-icon="text-[18px] block h-[18px] leading-[18px]"
  >
    <template v-slot:dropdown-items>
      <div class="py-[9px] pr-[16px] flex items-center bg-[#0000000a]">
        <span class="block pl-12 text-[13px] leading-[16.7141px]"
          >Contact List</span
        >
      </div>
    </template>
  </Dropdown>

  <Dropdown
    container-style="shadow-[0_2px_4px_0_rgba(0,0,0,.2)]"
    header-style="py-[6px] pl-[11px] pr-[10px] text-[13px] min-h-[40px]"
    arrow-icon="text-[16px] text-[rgba(0, 0, 0, 0.87)] font-normal leading-[16px]"
    text="Opportunities"
  >
    <template v-slot:dropdown-items>
      <div class="p-[11px]">
        <div class="pb-[10px]">
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
  </Dropdown>
</template>

<style lang="scss" scoped></style>
