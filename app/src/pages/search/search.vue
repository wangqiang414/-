<template>
  <div class="wraper">
    <div class="search-head">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="hot-search">
      <h2 class="title">热门搜索</h2>
      <div>
        <van-tag plain style="margin:0 30px 20px 0;">严选中国观影礼</van-tag>
        <van-tag plain style="margin:0 30px 20px 0;">拖鞋</van-tag>
        <van-tag plain style="margin:0 30px 20px 0;">云闪付立减商品2折起</van-tag>
        <van-tag plain style="margin:0 30px 20px 0;">口罩专区</van-tag>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'Search',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
    },
    onCancel() {
      this.$router.push('/')
      this.$parent.isShowTabBar=true
    },
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.wraper{
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.search-head{
  padding-bottom: 50px;
  background-color: #eee;
  form{
    background-color: white;
  }
}
.hot-search{
  padding: 10px;
  background-color: white;
  h2{
    font-weight: 400;
    color: grey;
    font-size: 16px;
    margin: 10px 0;
  }
}
</style>
