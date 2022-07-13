<template>
  <div>
    <h1>黑马头条</h1>
    <span class="toutiao toutiao-dianzan2"></span>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="login"></div>
  </div>
</template>

<script>
// 移动端适配
// 1.rem动态适配
// 下载amfe-flexible
// 不管处于什么分辨率，1rem始终是1/10视口大小

export default {
  data() {
    return {}
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
