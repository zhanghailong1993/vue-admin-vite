<template>
  <div class="screen-full" @click="toggle">
    <i
      :title="isFullscreen ? '小屏' : '全屏'"
      :class="`iconfont ${ isFullscreen ? 'team-iconexit-fullscreen' : 'team-iconfullscreen'}`"
    ></i>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isFullscreen = ref(false)

const toggle = () => {
  isFullscreen.value = !isFullscreen.value
}

</script>
<style lang="scss" scoped>
.screen-full {
  width: 40px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover {
    cursor: pointer;
    background: #f0f0f0;
  }
} 
</style>