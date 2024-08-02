<template>
  <div
    style="margin-left: 20px; margin-top: 20px"
    :class="{ 'h-8': true, 'flex items-center': icon }"
  >
    <div v-if="icon" class="p-[6px] flex items-center">
      <i
        :class="`default-icon block ${icon} h-4 w-4 text-center leading-4 text-[#0000001a]`"
      />
    </div>
    <span
      v-if="!icon"
      class="block text-[10px] leading-[10px] text-[#00000099]"
      >{{ title }}</span
    >
    <div
      :class="{
        [`text-xs leading-[14px] mt-1 text-[${descriptionColor}]`]: true,
        'mt-0': icon,
        'py-[9px] leading=[15.4284px] px-3 text-black': icon,
      }"
    >
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: String,
  title: String,
  description: String,
  descriptionColor: {
    type: String,
    default: "#000",
  },
});
</script>

<style scoped>
.hello {
  color: #03a9f4;
  color: #0000001a;
}
</style>
