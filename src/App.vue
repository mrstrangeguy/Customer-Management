<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from './components/Dropdown.vue';
import { DropdownEnum } from './types/DropdownEnum';

//text data
const sidebarDropdownData = ref({title:'CRM',items:['Contact List']})
</script>

<template>
<Dropdown icon-left="dx-icon dx-icon-user" :data="sidebarDropdownData" :variant="DropdownEnum.Sidebar"/>
<!-- <Dropdown :variant="DropdownEnum.Tool"/> -->
<!-- <Dropdown :variant="DropdownEnum.Profile"/> -->
</template>

<style lang="scss" scoped></style>
