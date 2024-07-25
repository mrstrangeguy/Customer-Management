<script setup lang="ts">
import Dropdown from './components/Dropdown.vue';
import { DropdownEnum } from './types/DropdownEnum';
</script>

<template>
<Dropdown icon-left="dx-icon dx-icon-user" icon-right="dx-treeview-toggle-item-visibility" :variant="DropdownEnum.Sidebar"/>
<!-- <Dropdown :variant="DropdownEnum.Tool"/> -->
<!-- <Dropdown :variant="DropdownEnum.Profile"/> -->
</template>

<style lang="scss" scoped></style>
