<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
        <!-- 全屏 -->
        <screenfull />
        <!-- 国际化 -->
        <div
            :title="langs ? '中文' : 'English'"
            class="inter">
            <img :src="langs ? ch : en" alt="">
        </div>
        <i class="el-icon-setting hsset"></i>
        <!-- 退出登陆 -->
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <img :src="favicon" alt="">
                <p>张海龙</p>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-switch-button">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-switch-button">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-switch-button">螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Hamburger from "/@/components/ReHamBurger";
import Breadcrumb from "/@/components/ReBreadCrumb";
import screenfull from "./screenfull/index.vue";
import favicon from "/favicon.ico";
import ch from "/@/assets/ch.png";
import en from "/@/assets/en.png";

const langs = ref(true)

</script>
<style lang="scss" scoped>
.navbar {
    width: 100%;
    height: 50px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .hamburger-container {
        line-height: 46px;
        float: left;
        height: 100%;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;
        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
    .breadcrumb-container {
        float: left;
    }
    .right-menu {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        height: 48px;
        line-height: 48px;
        .inter {
            width: 40px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            &:hover {
                cursor: pointer;
                background: #f0f0f0;
            }
            img {
                width: 25px;
            }
        }
        .hsset {
            width: 40px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 5px;
            &:hover {
                cursor: pointer;
                background: #f0f0f0;
            }
        }
        .el-dropdown-link {
            width: 70px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 10px;
            cursor: pointer;
            p {
                font-size: 14px;
            }
            img {
                width: 22px;
                height: 22px;
            }
        }
    }
}
</style>