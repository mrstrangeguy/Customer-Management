<template>
  <div
    class="py-2 pl-4 pr-0.5 w-full flex items-center shadow rounded-sm relative border-l-2 border-blue-400"
  >
    <span class="block w-full text-3.25">{{ status }}</span>
    <div class="px-2.5">
      <span class="block text-xs text-slate-500">{{ date }}</span>
      <span class="block text-xs text-nowrap mt-1.25 text-slate-500">
        {{ assignedTo }}
      </span>
    </div>
    <div>
      <div class="px-2 py-1.5">
        <i class="default-icon dx-icon dx-icon-overflow" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  status?: string;
  date: string;
  assignedTo: string;
};

defineProps<Props>();
</script>
