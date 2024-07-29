<template>
  <div
    :class="{ 'cursor-pointer z-100 relative': true, [containerStyle]: true }"
  >
    <div
      :class="{ 'dropdown-header z-100 relative': true, [headerStyle]: true }"
      @click.stop="toggleContentVisibility"
    >
      <div class="dropdown-header__content">
        <i :class="{ 'default-icon': true, [mainIcon]: true }" />
        <span :class="{ [textStyle]: true }">{{ text }}</span>
      </div>
      <i
        :class="{
          'default-icon dx-treeview-toggle-item-visibility': true,
          [arrowIcon]: true,
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
      <slot name="dropdown-items"></slot>
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

<!-- <Dropdown header-style="py-[9px] pr-[16px] bg-[#0000000a]"
 main-icon="dx-icon dx-icon-user block text-black w-12 h-[18px] leading-[18px] text-[18px] text-center"
text-style="text-[13px] font-bold leading-[15px]" text="CRM" arrow-icon="text-[18px] block h-[18px] leading-[18px]">

<template v-slot:dropdown-items>
<div class="py-[9px] pr-[16px] flex items-center bg-[#0000000a]">
<span class="block pl-12 text-[13px] leading-[16.7141px]">Contact List</span>
</div>
<div class="py-[9px] pr-[16px] flex items-center bg-[#0000000a]">
<span class="block pl-12 text-[13px] leading-[16.7141px]">Contact List</span>
</div>
</template>
</Dropdown> -->
