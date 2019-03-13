<template>
  <div class="not_is_box">
    <img v-lazy="topic.bannerInfo.picUrl" :src="topic.bannerInfo.picUrl" alt="New">
    <p class="line_two_point">{{topic.content}}</p>
    <div>
      <div class="left_info">
        <img v-lazy="topic.avatar" :src="topic.avatar" alt="avatar">
        <span>{{topic.nickName}}</span>
      </div>
      <div class="right_info">
        <span class="iconfont icon-dianzan"></span>
        <span>{{topic.supportNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotCollectionShow',
    props: {
      topic: Object
    },
    data () {
      return {}
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  
  .not_is_box
    width 345px
    border-radius 15px
    overflow hidden
    margin 0 10px 20px 10px
    box-sizing border-box
    font-size 28px
    background-color #fff
    box-shadow 0 0 3px #333333
    >img
      width 100%
    >p
      width 100%
      margin 30px 0 20px
      line-height 34px
      text-align center
      font-size 24px
      color #333
    >div
      width 100%
      height 60px
      display flex
      justify-content space-between
      align-items center
      .left_info
        height 100%
        display flex
        justify-content space-between
        align-items center
        >img
          width 48px
          height 48px
          margin-left 20px
          border-radius 50%
        >span
          margin-left 20px
          line-height 60px
          font-size 24px
          color #7f7f7f
      .right_info
        height 100%
        display flex
        align-items center
        >span
          margin-right 20px
          background-color: #fff
</style>
