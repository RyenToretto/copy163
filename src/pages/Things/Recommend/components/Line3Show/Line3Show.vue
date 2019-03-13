<template>
  <div class="line_show_box">
    <div class="line1">
      <img v-lazy="topic.avatar" :src="topic.avatar" alt="">
      <span>{{topic.nickname}}</span>
    </div>
    
    <div class="line2">
      {{topic.title}}
    </div>
    
    <img v-lazy="topic.picUrl" :src="topic.picUrl" alt="">
    
    <div class="line4">
      <span class="iconfont icon-kanguo"></span>
      <span>{{topic.readCount | count-num}}人看过</span>
    </div>
    <Split></Split>
  </div>
</template>

<script>
  export default {
    name: 'Line3Show',
    props: {
      topic: Object
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../../common/stylus/mixins.styl"
  
  .line_show_box
    width 100%
    box-sizing border-box
    background-color: #fff
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
    .line2
      margin 0 30px
      margin-bottom 15px
      font-size 36px
      color #333
    >img
      width 700px
      height 388px
      margin 0 30px
      margin-bottom 15px
    .line4
      margin 0 30px
      >span
        font-size 28px
        color #999
</style>
