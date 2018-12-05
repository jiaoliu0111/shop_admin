<template>
  <el-container class="home">
    <el-header class="home-header">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <img src="@/assets/logo.png" alt="" width="180">
        </el-col>
        <el-col :span="6" :offset="2">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="6" class="layout-desc">
          欢迎上海前端28期星曜会员
          <a class="layout" @click.prevent='logout'>退出</a>
        </el-col>
    </el-row>
    </el-header>
    <el-container class="home-content">
      <el-aside width="200px"  class="home-content-aside">
         <!-- :router="true" 表示让菜单启动路由模式，此时，
         el-menu-item 的 index 选项变为 哈希值（ 相当于 router-link 的 to 属性值 ） -->
        <el-menu
          :router="true"
          default-active="/users"
          class="el-menu-vertical-demo"

          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <!-- 一级菜单-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/users">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/roles">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="/rights">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main  class="home-content-main">
        <!-- 子路由 出口-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      // 1、确认退出？
      this.$confirm('是否确定退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 点击“确认”
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        // 退出功能
        // 1-页面跳转到 登录页
        this.$router.push('/login')
        // 2-移除本地存储的token
        localStorage.removeItem('token')
      }).catch(() => {
        // 点击“取消”
        this.$message({
          type: 'info',
          message: '取消退出'
        })
      })
    }
  }
}
</script>

<style>
  .home {
    height: 100%;
  }
  .home-header {
    background-color: #B3C1CD;
    height: 60px;
    line-height: 60px;
  }
  .home-header img {
    vertical-align: middle;
  }
  .home-header h1 {
    font-size: 28px;
    color: #fff;
    margin: 0;
  }
  .home-header .layout-desc {
    font-weight: bold;
    text-align: right;
  }
  .home-header .layout {
    color: #B07A17;
    text-decoration:underline;
    cursor: pointer;
  }
  .home-content {
    background-color: #EAEEF1;
  }
  .home-content-aside {
    background: #545C64;
  }

</style>
