<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>
      <!-- USERNAME -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Avator />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
      </el-form-item>
      <!-- PASSWORD -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Avator />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password"></el-input>
        <span class="show-pwd">
          <el-icon>
            <Avator />
          </el-icon>
        </span>
      </el-form-item>

      <!-- 登录 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px;">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { Avator } from '@element-plus/icons'
import {} from 'vue'
</script>

<style></style>
