<template>
  <div class="home-wraper">
    <div class="header">
      <div class="header-top">
        <div class="left">网易严选</div>
        <van-search placeholder="搜索商品" />
        <van-button plain type="primary" size="mini">登录</van-button>
      </div>
      <div class="header-bottom"></div>
    </div>
    <div class="content">
      content
    </div>
  </div>
</template>

<script>
export default {
  name:'Home'
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.home-wraper{
  width: 100%;
  height: 100%;
  position:relative;
  .header{
    width: 100%;
    height: 75px;
    position: fixed;
    left: 0;
    top: 0;
    .header-top{
      display: flex;
      height: 44px;
      justify-content: space-around;
      align-items: center;
    }
  }
  .content{
    width: 100%;
    position:absolute;
    left: 0;
    top: 75px;
  }
}
</style>
