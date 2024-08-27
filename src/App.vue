<script setup lang="ts">
import uiData from "./data/uiData.json";
import usersData from "./data/usersData.json";
import CustomerTable from "./components/CustomerTable.vue";

const { userAttributes } = uiData.usersPageData;
const { users } = usersData.userDetails; 
</script>

<template>


<customer-table :user-attributes="userAttributes" :users-details="users" />
</template>

<style lang="scss" scoped></style>

<!-- import uiData from "./data/uiData.json";
import usersData from "./data/usersData.json";

const { userAttributes } = uiData.usersPageData;
const { users } = usersData.userDetails; -->
<!-- <customer-table :user-attributes="userAttributes" :users-details="users" /> -->
