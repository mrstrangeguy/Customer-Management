<script setup lang="ts">
import { ref } from 'vue';
import CustomerTable from './components/CustomerTable.vue';
import uiData from './data/uiData.json'
import usersData from './data/usersData.json'

const userStatus = ref('commission')
</script>

<template>
<customer-table :user-attributes="uiData.usersPageData.userAttributes" :users-details="usersData.userDetails.users" :user-status="userStatus" />
</template>
