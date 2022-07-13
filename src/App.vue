<template>
  <div>
    <!-- 一级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import request from '@/untils/request'
// 移动端适配
// 1.rem动态适配
// 下载amfe-flexible
// 不管处于什么分辨率，1rem始终是1/10视口大小
export default {
  data() {
    return {}
  },
  created() {
    console.dir(request)
  }
}
</script>
<style>
.login {
  width: 694px;
  height: 88px;
  background-color: #6db4fb;
  border-radius: 10px;
}
</style>
