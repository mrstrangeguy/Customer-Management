<template>
    <div>
    <div style="width: 200px;">
    <div :class="{'dropdown-header':true,'version-one-wrapper':isCurrentClass(1)}" @click="onHeaderClick">
    <div class="dropdown-header__details">
    <i v-if="version === 1" :class="{'default-icon':true,[versionOneIcon]:true,'version-one-icon':true}"></i>
    <span :class="{'headerText':true,'version-one-headerText':isCurrentClass(1)}">CRM</span>
    </div>
    <i :class="{'default-icon':true,'version-one-arrow dx-treeview-toggle-item-visibility':isCurrentClass(1)}"></i>
    </div>
    <div :class="{'dropdown-content':true}">
    <div :class="{'version-one-wrapper':isCurrentClass(1)}">
    <div :class="{'version-one-item':isCurrentClass(1)}">
      <span :class="{'version-one-item__text':true}">Contact List</span>
    </div>
    </div>

    <div :class="{'version-one-wrapper':isCurrentClass(1)}">
    <div :class="{'version-one-item':isCurrentClass(1)}">
      <span :class="{'version-one-item__text':true}">Contact Details</span>
    </div>
    </div>
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

const onHeaderClick = () => {
  if(props.version && props.version < 2) return
}

</script>

<style lang="scss" scoped>
.dropdown-header {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: rgb(242, 242, 242);

    &__details {
      flex-grow: 1;
      width: 100%;
      display: flex;
      align-items: center;
    }
}

.version-one-wrapper {
  padding: 9px 16px 9px 0px;
}

.headerText {
  display: block;
}

.version-one-icon {
  display: block;
  font-size: 18px;
  width: 48px;
  text-align: center;
  line-height: 18px;
}

.version-one-headerText {
  font-size: 13px;
  line-height: 16.7141px;
  font-weight: 700;
}

.version-one-arrow {
  display: block;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.54);
}

.version-one-item {
  padding-left: 48px;
  
  &__text {
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
  }
}

.background-grey {
  background-color: rgba(0, 0, 0, 0.12);
}

</style>