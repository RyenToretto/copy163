<template>
  <div class="copy_right_wrapper">
    <p class="my_split"></p>
    <div class="copy_right_box">
      <div class="top_right_info">
        <a class="download_app" href="javascript:">下载APP</a>
        <a class="download_win" href="javascript:">电脑版</a>
      </div>
      <p class="copy_right">
        <span class="copy_admin">耶梦加德 版权所有 ©copyright</span>
        <span class="copy_year">2019</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KJFMobileRight',
    data () {
      return {
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .copy_right_wrapper
    width 100%
    .copy_right_box
      width 100%
      height 274px
      border-top 1px solid rgba(0, 0, 0, 0.15)
      background-color #414141
      display flex
      flex-direction column
      align-items center
      font-size 24px
      .top_right_info
        width 100%
        height 65px
        margin 40px 0
        display flex
        align-items center
        justify-content center
        .download_app
        .download_win
          height 100%
          margin-right 50px
          padding 18px 20px
          box-sizing border-box
          color #fff
          border 1px #fff solid
      .copy_right
        display flex
        flex-direction column
        align-items center
        justify-content center
        .copy_admin
        .copy_year
          line-height 32px
          color #999;
</style>
