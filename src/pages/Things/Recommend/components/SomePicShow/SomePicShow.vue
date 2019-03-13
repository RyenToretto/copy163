<template>
  <div class="pic_show_box">
    <div class="line1 ellipsis">{{topic.title}}</div>
    <div class="line2 ellipsis">{{topic.subTitle}}</div>
    <ul class="line3">
      <li v-for="(item, index) in topic.itemList" :key="index">
        <a href="javascript:">
          <img v-lazy="item.itemUrl" :src="item.itemUrl" alt="topic">
        </a>
      </li>
    </ul>
  
    <div class="line4">
      <span class="iconfont icon-kanguo"></span>
      <span>{{topic.readCount | count-num}}人看过</span>
    </div>
    
    <Split></Split>
  </div>
</template>

<script>
  export default {
    name: 'SomePicShow',
    props: {
      topic: Object
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../../common/stylus/mixins.styl"
  
  .pic_show_box
    width 100%
    box-sizing border-box
    background-color: #fff
    .line1
      width 100%
      margin 0 30px
      margin-bottom 20px
      font-size 36px
      color #333
    .line2
      margin 0 30px
      margin-bottom 15px
      font-size 28px
      color #7f7f7f
    .line3
      width 100%
      margin 0 30px
      margin-bottom 15px
      display flex
      flex-wrap wrap
      >li
        width 166px
        height 166px
        margin 0 10px 10px 0
        background-color: #f4f4f4
        >a
          width 100%
          height 100%
          >img
            width 100%
            height 100%
    .line4
      margin 0 30px
      >span
        font-size 28px
        color #999
</style>
