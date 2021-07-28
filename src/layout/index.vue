<template>
  <div class="app-wrapper">
    <!--侧边栏-->
    <Sidebar></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部导航栏 -->
        <navbar></navbar>
        <!-- <tag></tag> -->
      </div>
      <!--主体内容-->
      <app-main />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Navbar, Sidebar, AppMain, tag } from './components'
</script>
<style lang="scss" scoped>
$sideBarWidth: 210px;
.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
</style>