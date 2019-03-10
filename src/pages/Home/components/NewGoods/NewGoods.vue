<template>
  <div class="new_goods_box">
    <div class="new_header">
      <span class="new_title">新品首发</span>
      <span class="new_more">更多 &gt;</span>
    </div>
    
    <ul class="new_goods" v-if="homeData.newItemList">
      <li v-for="(item, index) in homeData.newItemList" v-if="index < 6" :key="index">
        <img v-lazy="item.primaryPicUrl" :src="item.primaryPicUrl" alt="新品">
        <div class="bottom_info">
          <span
            class="new_name">
            {{item.name.length > 14 ? (item.name.slice(0, 14) + '...') : item.name}}
          </span>
          <span class="new_price">¥{{item.retailPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'NewGoods',
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
  
  .new_goods_box
    .new_header
      display flex
      align-items center
      justify-content space-between
      .new_title
        font-size 32px
        line-height 100px
        margin 0 20px 0 50px
      .new_more
        font-size 28px
        line-height 100px
        margin-right 50px
    .new_goods
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
          margin-bottom 12px
          background-color #f5f5f5
        .bottom_info
          height 100px
          font-size 24px
          line-height 36px
          .new_name
            color #7f7f7f
          .new_price
            color $themeColor
</style>
