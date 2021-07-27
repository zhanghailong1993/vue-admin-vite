<template>
  <div class="app-wrapper">
    <!--侧边栏-->
    <Sidebar></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部导航栏 -->
        <navbar></navbar>
      </div>
      <!--主体内容-->
      
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Navbar, Sidebar } from './components'
</script>