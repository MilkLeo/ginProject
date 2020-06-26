<template>
  <div id="gin" CLASS="gin">

    <el-container>
      <gMenu></gMenu>
      <el-main style="padding-top: 100px">
        <router-view></router-view>
      </el-main>
      <el-footer>结束</el-footer>
    </el-container>
  </div>
</template>



<style scoped>
  #gin {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>


<script>
  import gMenu from './Menu.vue'
  import Introduction from './Introduction'

  export default {
    name: 'GIN',
    components: {gMenu, Introduction}
  }
</script>
