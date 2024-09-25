<script setup lang="ts">
import CustomerTable from './components/CustomerTable.vue';
import uiData from './data/uiData.json'
import usersData from './data/usersData.json'
</script>

<template>
<customer-table :user-attributes="uiData.usersPageData.userAttributes" :users-details="usersData.userDetails.users"/>
</template>

<style lang="scss" scoped>

</style>
