<template>
  <div class="header">
    <div class="header-top">
      <div class="left">网易严选</div>
      <van-search placeholder="搜索商品"
                  @click="toSearch" />
      <van-button plain
                  type="primary"
                  size="mini">登录</van-button>
    </div>
    <div class="header-bottom">
      <van-tabs v-model="active" @change="toList">
        <van-tab title="推荐"></van-tab>
        <van-tab :title="item.name"
                 v-for="item in cateModule"
                 :key="item.id"
                 ></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Head',
  data () {
    return {
      active: 0,
    }
  },
  methods: {
    toSearch(){
      this.$router.push('/search')
      this.$parent.isShowTabBar=false
    },
    toList(index){
      const categoryId=this.cateModule[index-1].id
      this.$router.push(`/list?categoryId=${categoryId}`)
    }
  },
  computed: {
    ...mapState(['cateModule'])
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.header {
  width: 100%;
  height: 75px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  z-index: 5;
  .header-top {
    display: flex;
    height: 44px;
    justify-content: space-around;
    align-items: center;
  }
  .header-bottom{
    height: 30px;
  }
}
</style>
