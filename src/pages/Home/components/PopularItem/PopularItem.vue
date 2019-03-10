<template>
  <div class="popular_box">
    <div class="popular_header">
      <span class="popular_title">人气推荐</span>
      <span class="popular_more">更多 &gt;</span>
    </div>
    
    <ul class="popular_goods" v-if="homeData.popularItemList">
      <li v-for="(item, index) in homeData.popularItemList" :key="index">
        <img v-lazy="item.primaryPicUrl" :src="item.primaryPicUrl" alt="人气推荐">
        <div class="popular_info">
          <span class="popular_name">{{index===0?item.name:
            (item.name.length > 14 ? (item.name.slice(0, 14) + '...') : item.name)}}</span><br v-if="index===0"/>
          <span class="popular_desc" v-if="index===0">{{item.simpleDesc}}</span><br v-if="index===0"/>
          <span class="popular_price">¥{{item.retailPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'PopularItem',
    computed: {
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
    async mounted () {
      await this.$store.dispatch("getHomeData")
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  
  .popular_box
    width 100%
    .popular_header
      display flex
      align-items center
      justify-content space-between
      .popular_title
        font-size 32px
        line-height 100px
        margin 0 20px 0 50px
      .popular_more
        font-size 28px
        line-height 100px
        margin-right 50px
    .popular_goods
      width 100%
      display flex
      flex-wrap wrap
      padding-left 30px
      >li
        width 216px
        height 318px
        margin-right 20px
        &:first-child
          width 100%
          height 320px
          display flex
          align-items center
          >img
            width 280px
            height 280px
            margin 0
          .popular_info
            margin 0 50px
        >img
          width 216px
          height 216px
          margin-bottom 12px
          background-color #f5f5f5
        .popular_info
          height 100px
          font-size 24px
          line-height 36px
          .popular_name
            color #333333
          .popular_desc
            font-size 24px
            color #7f7f7f
          .popular_price
            color $themeColor
</style>
