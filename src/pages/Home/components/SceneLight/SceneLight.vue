<template>
  <div class="scene_light">
    <ul v-if="homeData.sceneLightShoppingGuideModule">
      <li v-for="(shoppingGuide, index) in homeData.sceneLightShoppingGuideModule"
          :key="index">
        <p class="title">{{shoppingGuide.styleItem.title}}</p>
        <p class="desc">{{shoppingGuide.styleItem.desc}}</p>
        <div>
          <img v-lazy="itemPic.picUrl" :src="itemPic.picUrl"
               v-for="(itemPic, index) in shoppingGuide.styleItem.itemPicBeanList"
               :key="index" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'SceneLight',
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
  .scene_light
    ul
      display flex
      flex-wrap wrap
      justify-content center
      li
        position relative
        width 343px
        height 260px
        box-sizing border-box
        margin: 4px 0 0 4px
        padding: 20px 0 0 20px
        border-radius 4px
        background-color #F5F5F5
        .title
          padding-left 10px
          box-sizing border-box
          color #333
          font-size 32px
        .desc
          margin-top 10px
          margin-bottom 10px
          padding-left 10px
          box-sizing border-box
          color #7f7f7f
          font-size 24px
        >div
          display flex
          justify-content center
          img
            width 150px
            height 150px
            margin-right 4px
</style>
