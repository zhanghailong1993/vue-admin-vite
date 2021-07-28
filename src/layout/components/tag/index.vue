<template>
  <div class="tags-view">
    <el-scrollbar>

    </el-scrollbar>
    <!-- 右键菜单按钮 -->
    <!-- <ul class="contextmenu">
      
    </ul> -->
    <!-- 右侧功能按钮 -->
    <ul class="right-button">
      <li>
        <i class="el-icon-refresh-right rotate"></i>
      </li>
      <li>
        <el-dropdown trigger="click" placement="bottom-end">
          <i class="el-icon-arrow-down"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                sdfsdfsadf
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
      <li>
        <slot></slot>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
</script>
<style lang="scss" scoped>
.tags-view {
  width: 100%;
  font-size: 14px;
  display: flex;
  box-shadow: 0 0 1px #888888;
}
.right-button {
  display: flex;
  align-items: center;
  background: #fff;
  font-size: 16px;
  li {
    width: 40px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border-right: 1px solid #ccc;
    cursor: pointer;
  }
}
</style>