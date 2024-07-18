<template>
    <button :class="{'button-default':true,'button-version-1':isCurrentClass(1)}">
    <i class="icon-default"></i>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    version:number;
}>()

//function
const isCurrentClass = (versionNumber:number) => {
   return props.version === versionNumber;
}
</script>

<style lang="scss" scoped>
.button-version-1 {
   padding: 5px 12px 5px 8px;
   box-shadow: 0 1px 3px rgba(0,0,0,.24);
   background-color: #03a9f4;
   border-radius: 2px;
   color: white;
}

</style>