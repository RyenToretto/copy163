<template>
  <div class="category_box">
    <div class="cate_header">
      <div class="search_box">
        <div @click="$router.push('/search')">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
          <span>搜索商品，共19999件好物</span>
        </div>
      </div>
    </div>
    
    <div class="cat_content">
      <div class="left_nav">
        <ul>
          <li :class="{active:categoryData[curIndex]===firstLevel}"
              v-for="(firstLevel, index) in categoryData" :key="index"
              @click="toLevel2(index)"
          >
            {{firstLevel.name}}
          </li>
        </ul>
      </div>
      <div class="right_content" v-if="categoryData[curIndex]">
        <img v-lazy="categoryData[curIndex].wapBannerUrl" :src="categoryData[curIndex].wapBannerUrl" alt="WapBanner">
        <ul>
          <li v-for="(item, index) in categoryData[curIndex].subCateList" :key="index">
            <div>
              <img v-lazy="item.wapBannerUrl" :src="item.wapBannerUrl" alt="logo">
              <div>{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
    name: 'Category',
    data () {
      return {
        curIndex: 0
      }
    },
    computed: {
      ...mapState({
        categoryData: state=>state.category.categoryData
      })
    },
    methods: {
      toLevel2 (index) {
        this.curIndex = index
      }
    },
    watch: {
      categoryData: {
        deep: true,
        handler () {
          this.$nextTick(()=>{
            if(this.cScroll){
              this.cScroll.refresh()
            }else{
              this.cScroll = new BScroll(".left_nav", {click: true,scrollY: true})
            }
          })
        }
      }
    },
    async mounted () {
      await this.$store.dispatch("getCategoryData")
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  
  .category_box
    width 100%
    padding-top 88px
    .cate_header
      position fixed
      top 0
      left 0
      z-index 100
      width 100%
      height 88px
      border-bottom 1px solid #eee
      background-color: #fff
      display flex
      align-items center
      justify-content center
      .search_box
        width 675px
        height 56px
        border-radius 8px
        background-color: #ededed
        display flex
        align-items center
        justify-content center
        >div
          display flex
          align-items center
          >img
            width 28px
            height 28px
            margin-right 10px
          >span
            font-size 28px
    .cat_content
      width 100%
      font-size 28px
      .left_nav
        position fixed
        top 88px
        left 0
        width 162px
        max-height 1144px
        border-right 1px solid #eee
        >ul
          width 100%
          >li
            width 100%
            height 50px
            margin-top 40px
            line-height 50px
            text-align center
            font-size 28px
            color #7e8c8d
            &:first-child
              margin-top 20px
            &.active
              color $themeColor
              border-left 6px solid $themeColor
      .right_content
        float right
        width 588px
        box-sizing border-box
        padding 15px 30px 100px
        font-size 28px
        >img
          width 528px
          height 192px
          background-color: #fff
        >ul
          width 528px
          margin-top 20px
          display flex
          flex-wrap wrap
          >li
            width 144px
            height 216px
            margin-right 32px
            >div
              >img
                width 144px
                height 144px
              >div
                width 144px
                height 72px
                text-align center
</style>
