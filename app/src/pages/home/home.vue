<template>
  <div class="home-wraper">
    <Head/>
    <div class="content">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="green">
        <van-swipe-item v-for="tag in home.tagList" :key="tag.id">
          <img :src="tag.picUrl">
        </van-swipe-item>
      </van-swipe>
      <!-- 轮播图下分类 -->
      <ul class="kingList">
        <li class="kingItem" v-for="(item,index) in home.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl">
          <span>{{item.text}}</span>
        </li>
      </ul>
      <!-- 限时购 -->
      <div class="flashSale">
        <div class="flashSaleHead">
          <div class="left">
            <span>限时购</span>
            <van-count-down :time="time" style="margin-left:20px;"/>
          </div>
          <div class="right">更多></div>
        </div>
        <ul class="flashSaleList">
          <li class="flashSaleItem" v-for="(item,index) in home.flashSaleModule.itemList" :key="index">
            <img :src="item.picUrl">
            <div>
              <span class="active">￥{{item.activityPrice}} </span>
              <span style="text-decoration: line-through;"> ￥{{item.originPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      time: 30 * 60 * 60 * 1000,  
    }
  },
  computed: {
    ...mapState(['home','cateModule'])
  },  
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.home-wraper {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    position: absolute;
    left: 0;
    top: 75px;
    padding-bottom: 80px;
    .my-swipe .van-swipe-item {
      height: 185px;
      line-height: 185px;
      img{
        width: 100%;
        height: 185px;
      }
    } 
    .kingList{
      display: flex;
      flex-wrap: wrap;
      .kingItem{
        box-sizing: border-box;
        width: 25%;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        img{
          width: 80px;
          height: 80px;
        }
        span{
          font-size: 12px;
        }
      }
    }
    .flashSale{
      .flashSaleHead{
        height: 40px;
        padding: 0 20px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          display: flex;
          justify-content: space-between;
          align-items: center;
          span{
            font-size: 16px;
          }
        }
        .right{
          font-size: 16px;
        }
      }
      .flashSaleList{
        display: flex;
        flex-wrap: wrap;
        .flashSaleItem{
          width: 33.33%;
          display: flex;
          flex-direction: column;
          align-items: center;
          img{
            width: 110px;
            height: 120px;
          }
          div{
            margin: 10px 0;
            .active{
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
