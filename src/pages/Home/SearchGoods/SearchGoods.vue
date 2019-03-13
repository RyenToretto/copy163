<template>
  <div class="shopcar_box clearfix">
    <div class="top_search">
      <label class="input_label">
        <div class="scale_img">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="搜索" />
        </div>
        <div class="clear_img" v-if="userInput" @click="userInput=''">X</div>
        <input @keyup="toSearch" v-model="userInput" type="text" :placeholder="'美妆护肤 女王专享7折起'" />
      </label>
      <span class="right_back" @click="$router.back()">取消</span>
  
      <div class="result_show" v-if="userInput">
        <ul>
          <li v-for="(item, index) in searchResult" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom_title">热门搜索</div>
    <ul>
      <li v-for="(keyWord, index) in keywords" :key="index">
        <a :class="{active: curIndex===index-3}" href="javascript:">
          {{keyWord}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: 'Shopcar',
    data (){
      return {
        curIndex: 3,
        userInput: "",
        timerId: -1
      }
    },
    computed: {
      ...mapState({
        searchData: state=>state.home.searchData,
        searchResult: state=>state.home.searchResult
      }),
      keywords () {
        let arrs = []
        if(this.searchData.hotKeywordVOList){
          arrs = this.searchData.hotKeywordVOList.reduce((arr, next)=>{
            const word = next.keyword;
            arr.push && arr.push(word)
            return arr
          }, [])
        }
        return arrs
      }
    },
    methods: {
      toSearch () {
        clearTimeout(this.timerId)
        this.timerId = setTimeout(async ()=>{
          await this.$store.dispatch('getSearchResult', this.userInput)
        }, 300)
      }
    },
    async mounted () {
      await this.$store.dispatch("getSearchData")
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  
  .shopcar_box
    width 100%
    .top_search
      position relative
      width 690px
      height 56px
      margin 20px 0 0 30px
      font-size 0
      display flex
      align-items center
      .result_show
        position absolute
        left 0
        bottom 0
        z-index 1
        width 750px
        min-height 1258px
        box-sizing border-box
        transform translate(-30px ,100%)
        background-color: #f4f4f4
        >ul
          width 100%
          padding 0 30px
          box-sizing border-box
          background-color: #fff
          >li
            width 100%
            height 90px
            border-bottom  1px solid #eee
            font-size 28px
            line-height 120px
      .input_label
        position relative
        width 100%
        height 100%
        .clear_img
          position absolute
          top 14px
          right 28px
          width 28px
          height 28px
          border-radius 50%
          line-height: 28px;
          text-align: center;
          font-size: 28px;
          color #f2f2f2
          background-color: #888
        .scale_img
          position absolute
          width 60px
          height 100%
          background-color: #f4f4f4
          display flex
          align-items center
          justify-content center
          >img
            width 28px
            height 28px
        >input
          display block
          width 552px
          height 100%
          padding-left 60px
          outline none
          border 0 none
          margin 0
          background-color #f4f4f4
          font-size 28px
      .right_back
        width 66px
        font-size 28px
        color #333
    .bottom_title
      padding 30px 0 0 30px
      font-size 28px
      color #999
    >ul
      padding 30px 0 0 30px
      font-size 28px
      display flex
      flex-wrap wrap
      >li
        margin 0 32px 32px 0
        a
          margin-right 32px
          padding 8px 15px
          border 1px solid #999
          height 46px
          line-height 46px
          text-align center
          font-size 28px
          &.active
            border-color $themeColor
</style>
