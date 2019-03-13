<template>
  <div id="app">
    <HeaderNav v-show="$route.meta.showHeader"></HeaderNav>
    <router-view></router-view>
    <FooterNav v-show="$route.meta.showFooter"></FooterNav>
  </div>
</template>

<script>
  import HeaderNav from "./components/HeaderNav/HeaderNav.vue"
  import FooterNav from "./components/FooterNav/FooterNav.vue"
  export default {
    name: 'App',
    components: {
      HeaderNav,
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /************** 灰色顶部分割线 **************/
  .my_split:before    /* 灰色顶部分割线 */
    content ""
    display block
    width 100%
    height 18px
    border-top 1px solid rgba(7, 17, 27, 0.1)
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    background-color: #f3f5f7
    
  .line_two_point    /* 第二行出现省略号 */
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  input::-webkit-input-placeholder,
  input:-moz-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder
    color #f00
    font-size 28px
</style>
