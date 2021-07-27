<template>
  <div class="sidebar-logo-container">
    <router-link
      v-if="props.collapse"
      key="collapse"
      class="sidebar-logo-link"
      to="/"
    >
      <i class="fa fa-optin-monster"></i>
      <h1 class="sidebar-title">Pure Admin1</h1>
    </router-link>
    <router-link
      v-else
      key="expand"
      class="sidebar-logo-link"
      to="/"
    >
      <i class="fa fa-optin-monster"></i>
      <h1 class="sidebar-title">Pure Admin2</h1>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  collapse: {
    type: Boolean,
    required: true,
    default: false
  }
})

</script>
<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  text-align: center;
  overflow: hidden;
  .sidebar-logo-link {
    height: 100%;
    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #1890ff;
      font-size: 20px;
      margin-top: 16px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
    .fa-optin-monster {
      font-size: 30px;
      color: #1890ff;
      margin-top: 5px;
    }
  }
}
</style>