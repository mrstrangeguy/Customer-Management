<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from './components/Dropdown.vue';
import { DropdownEnum } from './types/DropdownEnum';

//text data
const sidebarDropdownData = ref({title:'CRM',items:['Contact List','Title','PragerU','Heritage']})
</script>

<template>
<Dropdown icon-left="dx-icon dx-icon-user" :data="sidebarDropdownData" :variant="DropdownEnum.Sidebar">
<template v-slot:list-item-slot>
    <div class="dropdown-item" v-for="item in sidebarDropdownData.items">{{ item }}</div>
</template>
</Dropdown>
<!-- <Dropdown :variant="DropdownEnum.Tool"/> -->
<!-- <Dropdown :variant="DropdownEnum.Profile"/> -->
</template>

<style lang="scss" scoped>
.dropdown-item {
    padding:9px 16px 9px 48px;
}
</style>
