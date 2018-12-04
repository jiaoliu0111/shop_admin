<template>
  <el-container class="home">
    <el-header class="home-header">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <img src="@/assets/logo.png" alt="" width="180">
        </el-col>
        <el-col :span="6" offset="2">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="6" class="layout-desc">
          欢迎上海前端28期星曜会员
          <a class="layout">退出</a>
        </el-col>
    </el-row>
    </el-header>
    <el-container class="home-content">
      <el-aside width="200px"  class="home-content-aside">Aside</el-aside>
      <el-main  class="home-content-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

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
  }
  .home-content {
    background-color: #EAEEF1;
  }
  .home-content-aside {
    background: #545C64;
  }

</style>
