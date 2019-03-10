<template>
  <div class="user_nav">
    <ul v-if="homeData.kingKongModule">
      <li v-for="(nav, index) in homeData.kingKongModule.kingKongList" :key="index">
        <a href="javascript:">
          <img v-lazy="nav.picUrl" :src="nav.picUrl" :alt="nav.text">
          <p>{{nav.text}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'UserNav',
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
  .user_nav
    ul
      display flex
      flex-wrap wrap
      margin-bottom 40px
      li
        width 110px
        height 156px
        margin 10px 20px 0
        a
          width 100%
          height 100%
          display flex
          flex-direction column
          justify-content center
          align-items center
          img
            width 110px
            height 110px
          p
            font-size 24px
            line-height 36px
            color #333
</style>
