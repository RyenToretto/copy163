<template>
  <div class="left_right_box">
    <div class="wrapper">
      <div class="left_box">
        <div class="line1">
          <img v-lazy="topic.avatar" :src="topic.avatar" alt="">
          <span>{{topic.nickname}}</span>
        </div>
    
        <div class="line2 line_two_point">
          {{topic.title}}
        </div>
  
        <div class="line3 ellipsis">
          {{topic.subTitle}}
        </div>
    
        <div class="line4">
          <span class="iconfont icon-kanguo"></span>
          <span>{{topic.readCount | count-num}}人看过</span>
        </div>
      </div>
      <img v-lazy="topic.picUrl" :src="topic.picUrl" alt="">
    </div>
    <Split></Split>
  </div>
</template>

<script>
  export default {
    name: 'LeftRightShow',
    props: {
      topic: Object
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../../common/stylus/mixins.styl"
  
  .left_right_box
    width 100%
    box-sizing border-box
    background-color: #fff
    .wrapper
      width 100%
      display flex
      .left_box
        width 445px
        height 278px
        .line1
          width 100%
          margin 0 30px
          margin-bottom 20px
          font-size 28px
          >img
            display inline-block
            width 40px
            height 40px
            margin-right 20px
            border-radius 50%
            vertical-align middle
          >span
            fonr-size 28px
        .line2,
        .line3
          margin-left 30px
          margin-bottom 15px
          font-size 36px
          color #333
        .line3
          font-size 28px
          margin-bottom 30px
          color #7f7f7f
        .line4
          margin 0 30px
          >span
            font-size 24px
            color #999
      >img
        width 278px
        height 278px
</style>
