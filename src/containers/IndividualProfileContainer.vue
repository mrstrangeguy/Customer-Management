<template>
    <div class="bg-white">
    <div class="p-2 pl-4 flex items-center justify-between">
    <div class="pr-4 flex h-10 items-center">
    <div class="text-3.25 font-bold mr-3">Arnie Schwartz</div>
    <icon-text-field icon="contact-status bg-wageningen-green" text="Salaried" icon-style="mr-1.25" text-style="text-wageningen-green text-3.25 font-normal"/>
    </div>
    <div class="pl-3.75 flex items-center">
    <Button icon="dx-icon-unpin" hover-bg="#00000014" button-style="!px-1.5 !shadow-none !text-slate-700" is-rounded/>
    <div class="pl-1.5">
    <Button icon="dx-icon-close" hover-bg="#00000014" button-style="!px-1.5 !shadow-none !text-slate-700" is-rounded/>
    </div>
    </div>
    </div>

    <div class="px-4 border-b">
    <div class="flex">
    <img class="block w-31 h-31 max-h-31 object-cover object-top border rounded-lg mr-5" src="../../assets/images/employee_profile.png" alt="profile-image">
    <div class="pl-5">
    <div>
    <icon-text-field label="Company" text="Screen Shop" text-style="mt-1 !text-democrat" is-column/>
    </div>
    <div class="mt-5">
    <icon-text-field label="Position" text="Engineer" text-style="mt-1 !text-black" is-column/>
    </div>
    <div class="mt-5">
    <icon-text-field label="Assigned to" text="John Heart" text-style="mt-1 !text-democrat" is-column/>
    </div>
    </div>    
    </div>

    <div class="py-4">
    <div>
     <icon-text-field icon="dx-icon-tel" icon-style="px-1.5" text="+1(714)555-8882" text-style="pl-4"/>   
    </div>
    <div class="mt-5" >
     <icon-text-field icon="dx-icon-email" icon-style="px-1.5" text="arnolds@dx-email.com" text-style="pl-4"/>   
    </div>
    <div class="mt-5">
     <icon-text-field icon="dx-icon-tel" icon-style="px-1.5" text="125 W Elm St" text-style="pl-4"/>   
    </div>
    </div>

    </div>
    <div class="py-2.5 px-4 flex items-center border-b">
    <div class="pr-4 h-10 flex items-center">
    <Dropdown text="ACTIONS" arrow-icon="dx-icon-spindown" />
    </div>
    <div class="pr-4">
    <div class="min-w-22.5">
    <Button text="Edit"/>
    </div>
    </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import IconTextField from '../components/IconTextField.vue';
import Button from '../components/Button.vue';
import Dropdown from '../components/Dropdown.vue';
</script>

<style scoped>
</style>