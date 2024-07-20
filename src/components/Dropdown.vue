<template>
    <div>
    <div>
    <div class="dropdown-header">
    <i v-if="version === 1" :class="{'default-icon':true,[versionOneIcon]:true,'version-one-icon':true}"></i>
    <span :class="{'headerText':true,'version-one-headerText':isCurrentClass(1)}">CRM</span>
    </div>
    </div>    
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  version:Number,
  versionOneIcon:{
    type:String,
    default:''
  }
});

const isCurrentClass = (versionNumber:number) => {
   return props.version === versionNumber;
}
</script>

<style scoped>
.dropdown-header {
    padding: 9px 16px 9px 0px;
    display: flex;
    align-items: center;
}

.headerText {
  display: block;
}

.version-one-icon {
  display: block;
  font-size: 18px;
  width: 48px;
  text-align: center;
}

.version-one-headerText {
  font-size: 13px;
}

</style>