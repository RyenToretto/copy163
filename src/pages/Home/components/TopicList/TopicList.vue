<template>
  <div class="topic_box">
    <div class="topic_header">
      <span class="topic_title">专题精选</span>
      <span class="topic_more">更多 &gt;</span>
    </div>
    
    <div class="topic_goods_box clearfix">
      <ul class="topic_goods clearfix" v-if="homeData.topicList">
        <li v-for="(item, index) in homeData.topicList" :key="index">
          <img v-lazy="item.itemPicUrl" :src="item.itemPicUrl" alt="人气推荐">
          <div class="topic_info">
            <span class="topic_title">{{item.title}}</span>
            <span class="topic_subtitle">¥{{item.subtitle}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from "better-scroll"
  
  export default {
    name: 'TopicList',
    computed: {
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
    async mounted () {
      await this.$store.dispatch("getHomeData")
      this.$nextTick(()=>{
        new BScroll(".topic_goods_box", {click: true, scrollX: true})
      })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  
  .topic_box
    width 100%
    .topic_header
      display flex
      align-items center
      justify-content space-between
      >.topic_title
        font-size 32px
        line-height 100px
        margin 0 20px 0 50px
      .topic_more
        font-size 28px
        line-height 100px
        margin-right 50px
    .topic_goods_box
      position relative
      width 100%
      overflow hidden
      .topic_goods
        float left
        display flex
        >li
          float left
          width 480px
          height 393px
          margin-right 31.25px
          >img
            width 480px
            height 267px
            margin-bottom 12px
            background-color #f5f5f5
          .topic_info
            height 100px
            margin-left 20px
            line-height 40px
            >.topic_title
              display block
              width 448px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              color #333
              font-size 28px
            .topic_subtitle
              color #7f7f7f
              font-size 24px
</style>
