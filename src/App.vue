<script setup lang="ts">
import Customertable from './components/Customertable.vue';
import uiData from './data/uiData.json'
import usersData from './data/usersData.json'

const {userAttributes} = uiData.usersPageData
const {users} = usersData.userDetails

</script>

<template>
<Customertable :user-attributes="userAttributes" :users-details="users"/>
</template>

<style lang="scss" scoped></style>
