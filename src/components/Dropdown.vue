<template>
    <div :class="{[variant]:true}" :style="{width:'250px'}">
    <div class="dropdown-header dropdown-wrapper" @click="isClicked = !isClicked">

    <div class="dropdown-header__sec-1">
    <i :class="{'default-icon':true,'left-icon':true,[iconLeft]:true}"/>
    <span :class="{'header-text':true}">CRM</span>
    </div>

    <div class="dropdown-header__sec-2">
    <i :class="{'default-icon':true,'right-icon':true,[iconRight]:true}"/>
    </div>
    </div>
    <div :class="{'dropdown-content':true,'disable-view':isClicked,'non-disabled-view':!isClicked}">
      <div class="dropdown-content-item dropdown-wrapper">
        <span class="dropdown-content__text">Contact List</span>
      </div>
      <div class="dropdown-content-item dropdown-wrapper">
        <span class="dropdown-content__text">Contact Details</span>
      </div>
    </div>
    </div>
   
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  variant:{
    type:String,
    default:''
  },
  iconLeft:{
    type:String,
    default:''
  },
  iconRight:{
    type:String,
    default:''
  }
})

const isClicked = ref<boolean>(false);
</script>

<style lang="scss" scoped>
* {
  font-size: 13px;
  line-height: 16.7141px;
}
.disable-view {
  display: block;
  transition: max-height 1s ease 0s,
  display 2s ease 0s;
  max-height: 0;
}

.non-disabled-view {
  // display: none;
  transition: max-height 1s ease 0s,
  display 2s ease 0s;
  max-height: 72px;
}

.dropdown-header {

  &__sec-1,
  &__sec-2 {
    display: flex;
    align-items: center;
  }

  &__sec-1 {
    flex-grow: 1;
  }
}
.left-icon,
.right-icon
{
  font-size: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
}

.right-icon {
  color: rgba(0, 0, 0, 0.54);
  font-weight: 400;
}

.left-icon {
  width: 48px;
  color: rgba(0, 0, 0, 0.87);
}

.dropdown {
  &--sidebar {
    background-color:rgb(242, 242, 242);
   
    .dropdown-wrapper {
      padding:9px 16px 9px 0px;
    }

    .dropdown-header {
      display: flex;
      color: rgba(0, 0, 0, 0.87);
      gap: 12px;

      .header-text {
        line-height: 16.7141px;
        font-weight: 700;
      }
    }

    .dropdown-content {
 
    &__text {
      display: block;
      padding-left: 48px;
      line-height: 18px;
    }
    }
  }

  // &--tool {
   
  // }

  // &--profile {
   
  // }
}
</style>