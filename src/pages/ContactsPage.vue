<template>
    <div class="h-full">
    <div class="h-14 bg-blue-300">

    </div>
    <div class="h-full flex">
    <div class="h-full bg-red-500 w-[250px] min-h-full">
    <side-bar-container/>
    </div>
    <div class="px-8 w-full">
    <div style="height: 86px;" class="bg-red-200"></div>
    <div>
    <customer-table :user-attributes="uiData.usersPageData.userAttributes" :users-details="UsersData.userDetails.users"/>
    </div>
    </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import SideBarContainer from '../containers/SideBarContainer.vue';
import CustomerTable from '../components/CustomerTable.vue';
import uiData from '../data/uiData.json'
import UsersData from '../data/usersData.json'
</script>

<style scoped>

</style>