<template>
  <section class="app-main">
    <router-view :key="key"></router-view>
  </section>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const key = computed(() => route.path)

</script>
<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 90vh;
  min-height: calc(100vh - 70px);
  position: relative;
  overflow-x: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>
<style lang="scss">
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
  </style>