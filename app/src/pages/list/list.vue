<template>
  <div class="list">
    <Head ref="head"/>
    <ul class="cateList">
      <li class="cateItem" v-for="(item,index) in categoryList.subCateList" :key="index">
        <img :src="item.wapBannerUrl">
        <span>{{item.frontDesc}}</span>
        <span style="color:red;">￥1</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name:'List',
  data () {
    return {
      categoryList:{}
    }
  },
  mounted () {
    this.getCateList()
  },
  computed: {
    ...mapState(['cateModule'])
  },
  watch: {
    $route(to, from) {
      // 解构出query和params参数数据
      const { query } = to
      // 更新参数对象数据
      this.getCateList(query)
    }
  },
  methods: {
    getCateList(categoryId){
      categoryId=this.$route.query.categoryId
      const categoryList=this.cateModule.find(item=>item.id==categoryId)
      this.categoryList=categoryList
   }
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.cateList{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  left: 0;
  top: 75px;
  .cateItem{
    box-sizing: border-box;
    width: 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 100%;
      height: 200px;
    }
  }
}
</style>
