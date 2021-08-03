<template>
    <div class="info">
        <el-form class="rule-form">
            <el-form-item prop="userName">
                <el-input
                    clearable
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-user"
                    v-model="model.userName"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="passWord">
                <el-input
                    clearable
                    show-password
                    type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-lock"
                    v-model="model.passWord"
                >
                </el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const model = reactive({
    userName: '',
    passWord: ''
})
</script>