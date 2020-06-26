<template>
  <div>
    <h1>
      琴酒简介
    </h1>
  <el-carousel style="width: 100%; height: auto">
    <el-carousel-item v-for="item in pics" :key="item.url">
      <img :src="item.url" class="imgborder" />
    </el-carousel-item>
  </el-carousel>

    <di style="padding-top: 200px background-image='./image/gin4.jpg'">
        <h2>
          角色背景
        </h2>
    </di>
  </div>
</template>

<script>
  export default {
    name: 'Introduction',
    data () {
      return {
        pics: [
          {url: require('../assets/images/gin1.jpeg')},
          {url: require('../assets/images/gin2.jpeg')},
          {url: require('../assets/images/gin3.jpg')}
        ]
      }
    }
  }
</script>

<style scoped>

  .imgborder{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
