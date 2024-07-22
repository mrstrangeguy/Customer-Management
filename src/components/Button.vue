<template>
    <button :class="{'button-default':true}">
    <i :class="{'default-icon':true,[icon]:true,'icon-version-1':true}"></i>
    <!-- <span  :class="{'version-2-text':isCurrentClass(1)}">Add Contact</span> -->
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    version:String,
    buttonType:{
     type:String,
     required:true
    },
    icon:{
        type:String,
        default:''
    }
})

//function
const isCurrentClass = (versionNumber:number) => {
   return props.version === versionNumber;
}

</script>

<style lang="scss" scoped>

.button-default {
    cursor: pointer;
}

.common-button {
    &--primary {
   padding: 5px 12px 5px 8px;
   box-shadow: 0 1px 3px rgba(0,0,0,.24);
   background-color: #03a9f4;
   border-radius: 2px;
   color: rgba(0, 0, 0, 0.87);
   display: flex;
   align-items: center;
   height: 28px;
   }

   &--secondary {
    padding: 5px;
    border-radius: 50%;
    transition: 0.5s;
    background-color: white;
   }
}

.icon-version-1 {
   margin-right: 4px;
   font-size: 16px;
}

.version-1-text {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    display: block;
    letter-spacing: 0.52px;
}

.button-version-2 {
   
}

.icon-version-2 {
    font-size: 18px;
}

.icon-version-1,
.icon-version-2 {
    color: rgba(0, 0, 0, 0.87);
    &::before {
        display: block;
    }
}

</style>