<template>
  <div class="flash_sale_box">
    <div class="flash_header">
      <div class="left_info">
        <span class="flash_title">限时购</span>
        <div class="flash_time">
          <span class="hour">03</span>
          <span class="point">:</span>
          <span class="minutes">04</span>
          <span class="point">:</span>
          <span class="seconds">05</span>
        </div>
      </div>
      <span class="flash_more">更多 &gt;</span>
    </div>
    
    <ul class="flash_goods" v-if="homeData.flashSaleModule">
      <li v-for="(item, index) in homeData.flashSaleModule.itemList" :key="index">
        <img v-lazy="item.picUrl" :src="item.picUrl" alt="picUrl">
        <div class="bottom_info">
          <span class="flash_price">¥{{item.activityPrice}}</span>
          <span class="old_price">¥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'FlashSale',
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
  .flash_sale_box
    .flash_header
      display flex
      align-items center
      justify-content space-between
      .left_info
        display flex
        align-items center
        .flash_title
          font-size 32px
          line-height 100px
          margin 0 20px 0 50px
        .flash_time
          display flex
          .hour
          .minutes
          .seconds
            display block
            width 36px
            height 36px
            font-size 24px
            line-height 36px
            text-align center
            color #fff
            background-color: #333
          .point
            margin 0 20px
            font-size 28px
      .flash_more
        font-size 28px
        line-height 100px
        margin-right 50px
    .flash_goods
      display flex
      flex-wrap wrap
      justify-content space-around
      padding-left 20px
      >li
        width 216px
        height 318px
        margin-right 20px
        >img
          width 216px
          height 216px
          background-color #f5f5f5
        .bottom_info
          display flex
          align-items center
          justify-content center
          height 100px
          line-height 100px
          .flash_price
            font-size 28px
            color #b4282d
            margin-right 20px
          .old_price
            font-size 24px
            color #7f7f7f
            text-decoration line-through
</style>
