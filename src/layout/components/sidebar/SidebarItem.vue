<template>
    <div v-if="!item.hidden">
      <template v-if="!item.children">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
      </template>
      <el-submenu
        ref="subMenu"
        v-else
        :index="item.path"
      >
        <template #title>
          <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="child.path"
          class="nest-menu"
        />
      </el-submenu>  
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  item: {
    required: true,
    type: Object
  },
  basePath: {
    type: String,
    default: ''
  }
})
</script>