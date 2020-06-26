<template id="Gmenu">


      <el-header><h2 style="text-align: center">琴酒个人主页</h2>

        <el-row style="padding-top: 20px">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-row>
                <el-menu
                  class="el-menu-demo"
                  mode="horizontal"
                  :default-active="this.$route.path"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  router>
                  <el-menu-item index="Introduction" style="padding-left: 200px ;text-align: center">琴酒简介</el-menu-item>

                  <el-submenu index="2">
                    <template slot="title" style="padding-left: 200px;text-align: center">同人创作</template>
                    <el-menu-item index="2-1">同人图</el-menu-item>
                    <el-menu-item index="2-2">同人文</el-menu-item>
                    <el-menu-item index="2-3">同人谷</el-menu-item>
                    <el-menu-item index="2-4">视频创作</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="/Official" style="padding-left: 200px;text-align: center">官方</el-menu-item>
                  <el-menu-item index="/Comments" style="padding-left: 200px;text-align: center">评价</el-menu-item>
                  <el-menu-item index="5" style="padding-left: 200px;text-align: center">关于</el-menu-item>
                  <!--                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
                </el-menu>
              </el-row>
            </div>
          </el-col>
        </el-row>

      </el-header>

</template>

<script>
  export default {
    name: 'gMenu'
  }


</script>

<style scoped>

</style>
