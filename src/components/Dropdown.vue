<template>
  <div
    :class="`cursor-pointer z-100 relative ${containerStyle}`"
  >
    <div
      :class="`dropdown-header z-100 relative ${headerStyle}`"
      @click.stop="toggleContentVisibility"
    >
      <div class="dropdown-header__content">
        <i :class="`default-icon ${mainIcon}`" />
        <span :class="textStyle">{{ text }}</span>
      </div>
      <i
        :class="{
          [`default-icon dx-treeview-toggle-item-visibility ${arrowIcon}`]: true,
          'dx-treeview-toggle-item-visibility-opened': isHeaderClicked,
        }"
      />
    </div>
    <div
      :class="{
        'dropdown__content z-[-1] relative overflow-hidden transition-all': true,
        'max-h-[1000px] duration-[1200ms] ease-in': isHeaderClicked,
        'max-h-0 duration-[1500ms] ease-out': !isHeaderClicked,
      }"
    >
      <slot name="dropdown-items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isHeaderClicked = ref(false);

const toggleContentVisibility = () => {
  isHeaderClicked.value = !isHeaderClicked.value;
};

defineProps({
  headerStyle: {
    type: String,
    required: true,
  },
  mainIcon: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  textStyle: {
    type: String,
    default: "",
  },
  arrowIcon: {
    type: String,
    default: "",
  },
  containerStyle: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.red-box {
  position: absolute;
  top: 5px;
  background-color: red;
  left: 10px;
  width: 20px;
  height: 20px;
}

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
