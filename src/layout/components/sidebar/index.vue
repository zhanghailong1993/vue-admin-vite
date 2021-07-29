<template>
  <div class="has-logo sidebar-container">
    <Logo collapse />
    <el-menu
      mode="vertical"
      :uniqueOpened="true"
      default-active="2"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <sidebar-item
        v-for="route in routeStore.wholeRoutes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import Logo from './Logo.vue'
import SidebarItem from "./SidebarItem.vue"
import { ref, reactive, toRefs } from 'vue'
import { usePermissionStoreHook } from "/@/store/modules/permission";

const isCollapse = ref(false)
const data = reactive({
  routeStore: [{
    path: '/home'
  }]
})

const routeStore = usePermissionStoreHook()
</script>