<template>
  <div class="category_module_box">
    <div class="my_split" v-for="(category, index) in homeData.categoryModule" :key="index">
      <img v-lazy="category.titlePicUrl" :src="category.titlePicUrl" alt="品类展示">
      <div class="goods_wrapper" :class="'goods_wrapper_'+index">
        <ul class="good_ul">
          <li v-for="(item, index) in category.itemList" :key="index">
            <img class="good_img" :src="item.primaryPicUrl" alt="">
            <span class="good_name line_two_point">{{item.name}}</span>
            <span class="good_price">¥{{item.retailPrice}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from "better-scroll"
  
  export default {
    name: 'CategoryModule',
    computed: {
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
    async mounted () {
      await this.$store.dispatch("getHomeData")
      this.$nextTick(()=>{
        for(let i=0; i<this.homeData.categoryModule.length;i++){
          new BScroll(".goods_wrapper_"+i, {click: true, scrollX: true})
        }
      })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  
  .category_module_box
    width 100%
    >div
      position relative
      width 100%
      >img
        width 750px
        height 400px
        margin-bottom 20px
      .goods_wrapper
        width 100%
        overflow hidden
        .good_ul
          float left
          display flex
          li
            float left
            width 200px
            height 333px
            margin-right 20px
            font-size 24px
            line-height 36px
            background-color: #fff
            .good_img
              width 200px
              height 200px
              background-color: #f4f4f4
              margin-bottom 10px
            .good_name
              color #000
              display block
              height 72px
            .good_price
              color $themeColor
</style>
