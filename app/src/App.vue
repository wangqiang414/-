<template>
  <div id="app">
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" v-show="isShowTabBar"
                >
      <van-tabbar-item icon="home-o">
        <router-link to='/'>首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="coupon-o">
        <router-link to='/class'>分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="send-gift-o">
        <router-link to='/buy'>值得买</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">
        <router-link to='/shopping'>购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="manager-o">
        <router-link to='/center'>个人</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      active: 0,
      isShowTabBar:true
    };
  },
  mounted () {
    this.$store.dispatch('getHome')
    this.$store.dispatch('getCateModule')
    this.$store.dispatch('getCateNavDatas')
    this.$store.dispatch('getNavCateLists')
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
