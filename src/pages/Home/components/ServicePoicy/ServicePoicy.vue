<template>
  <div class="servicePolicy">
    <ul>
      <li class="item">
        <a href="javascript:">
          <i class="iconfont icon-duihao"></i>
          <span class="text">网易自营品牌</span>
        </a>
      </li>
      <li class="item">
        <a href="javascript:">
          <i class="iconfont icon-duihao"></i>
          <span class="text">30天无忧退货</span>
        </a>
      </li>
      <li class="item">
        <a href="javascript:">
          <i class="iconfont icon-duihao"></i>
          <span class="text">48小时快速退款</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ServicePoicy'
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .servicePolicy
    background-color #FFFFFF
    color $themeColor
    ul
      box-sizing border-box
      width 100%
      height 72px
      padding 0 30px
      display flex
      justify-content center
      li
        display flex
        justify-content center
        align-items center
        a
          color $themeColor
          display flex
          justify-content center
          align-items center
          .iconfont
            font-size 37.5px
            margin-left 15px
          .text
            font-size 24px
            margin-left 15px
            line-height 32px
            vertical-align middle
</style>
