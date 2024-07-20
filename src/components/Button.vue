<template>
    <button :class="{'button-default':true,'button-version-1':isCurrentClass(1),'button-version-2':isCurrentClass(2),'button-version-3':isCurrentClass(3)}">
    <i v-if="isCurrentClass(1)" :class="{'default-icon':true,[versionOneIcon]:true,'icon-version-1':true}"></i>
    <span v-if="isCurrentClass(1)" :class="{'version-1-text':isCurrentClass(1)}">Add Contact</span>

    <span v-if="isCurrentClass(2)" :class="{'version-2-text':isCurrentClass(2)}">All</span>
    <i v-if="isCurrentClass(2)" :class="{'default-icon':true,[versionTwoIcon]:true,'icon-version-2':true}"></i>

    <i v-if="isCurrentClass(3)" :class="{'default-icon':true,[versionThreeIcon]:true,'icon-version-3':true}"></i>

    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    version:Number,
    versionOneIcon:{
        type:String,
        default:''
    },
    versionTwoIcon:{
        type:String,
        default:''
    },
    versionThreeIcon:{
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

.button-version-1 {
   padding: 5px 12px 5px 8px;
   box-shadow: 0 1px 3px rgba(0,0,0,.24);
   background-color: #03a9f4;
   border-radius: 2px;
   color: white;
   display: flex;
   align-items: center;
   height: 28px;
   font-family: "Roboto", sans-serif;
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
    display: flex;
    align-items: center;
    padding: 5px 12px 5px 8px;
    background-color: white;
    color: rgba(0, 0, 0, 0.87);
    font-family: "Roboto", sans-serif;
}

.version-2-text {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.52px;
}

.icon-version-2 {
    margin-left: 4px;
    font-size: 16px;
}

.button-version-3 {
    padding: 0;
    background-color: white;

    &:hover {
        background-color: rgba(0, 0, 0, 0.87);
    }
}

.icon-version-3 {
    font-size: 18px;
}

.icon-version-1,
.icon-version-2,
.icon-version-3 {
    &::before {
        display: block;
    }
}

</style>