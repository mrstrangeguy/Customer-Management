<template>
  <div
    :class="{ 'h-8': true, 'flex items-center': icon }"
  >
    <div v-if="icon" class="p-1.5 flex items-center">
      <i
        :class="`default-icon block ${icon} h-4 w-4 text-center leading-4 text-[#0000001a]`"
      />
    </div>
    <span
      v-if="!icon"
      class="block text-[10px] leading-2.5 text-[#00000099]"
      >{{ title }}</span
    >
    <div
    style="color: descriptionColor;"
      :class="{
        [`text-xs leading-3.5 mt-1`]: true,
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

<style scoped></style>

<!-- <Text title="Position" description="ACME" description-color="#03a9f4" />
<Text icon="dx-icon dx-icon-tel" description="sample5@gmail.com" /> -->
