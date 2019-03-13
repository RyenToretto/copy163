<template>
  <div class="order_show_box">
    <div class="order_show_content">
      <div class="order_top_box">
        <div class="top_title clearfix">让生活更好的N种方式</div>
        <div class="top_subtitle">{{commentData.title}}</div>
        <div class="top_scroll_box clearfix">
          <ul class="top_scroll">
            <li class="scroll_item" v-for="(look, index) in commentData.lookList" :key="index">
              <img v-lazy="look.banner.picUrl" :src="look.banner.picUrl" alt="BetterLife">
            </li>
          </ul>
        </div>
        <Split/>
      </div>
      
      <div class="order_content_box">
        <div class="content_title">TA们的严选生活</div>
        <div class="content_toggle">
          <span class="new_btn" :class="{active: type === 1}" @click="changeType(1)">
            最新
          </span>
          <span class="hot_btn" :class="{active: type === 2}" @click="changeType(2)">
            本月最热
          </span>
          <span class="show_btn" :class="{active: type === 3}" @click="changeType(3)">
            晒单合辑
          </span>
        </div>
        
        <div class="content_wrapper">
          <ul class="content_show clearfix" v-if="threeTypeData">
            <li v-for="(topic, index) in threeTypeData.topicList" v-if="index%2 === 0" :key="index">
              <NotCollectionShow v-if="!topic.isCollection" :topic="topic"></NotCollectionShow>
              <IsCollectionShow v-if="topic.isCollection" :topic="topic" :type="type"></IsCollectionShow>
            </li>
          </ul>
          
          <ul v-if="threeTypeData" class="content_show clearfix">
            <li v-for="(topic, index) in threeTypeData.topicList" v-if="index%2 === 1" :key="index">
              <NotCollectionShow v-if="!topic.isCollection" :topic="topic"></NotCollectionShow>
              <IsCollectionShow v-if="topic.isCollection" :topic="topic" :type="type"></IsCollectionShow>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NotCollectionShow from "./NotCollectionShow/NotCollectionShow"
  import IsCollectionShow from "./IsCollectionShow/IsCollectionShow"
  
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
    name: 'OrderShow',
    components: {
      NotCollectionShow,
      IsCollectionShow
    },
    data () {
      return {
        tabId: 7,
        type: 1,
        moreDataPage: 1
      }
    },
    watch: {
      type: {
        deep: true,
        async handler () {
          this.moreDataPage = 1
          await this.$store.dispatch("getThreeTypeData", {page: this.moreDataPage, size: 5, type: this.type})
        }
      }
    },
    computed: {
      ...mapState({
        commentData: state=>state.things.commentData,
        threeTypeData: state=>state.things.threeTypeData
      })
    },
    methods: {
      changeType (type){
        this.type = type
      }
    },
    async mounted () {
      await this.$store.dispatch("getCommentData")
      await this.$store.dispatch("getThreeTypeData", {page: this.moreDataPage, size: 5, type: this.type})
      
      this.$nextTick(()=>{
        try {
          if(this.topScroll){
            this.topScroll.refresh()
          }else{
            this.topScroll = new BScroll(".top_scroll_box",{
              click: true,
              scrollX: true,
              scrollY: false
            })
          }
          if(this.cScroll){
            this.cScroll.refresh()
          }else{
            this.cScroll = new BScroll(".order_show_box", {
              click: true,
              probeType: 2,
              scrollX: false,
              scrollY: true,
              bounce: false,    // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
              //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
              //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
              pullUpLoad: true
            })
            this.cScroll.on("pullingUp", async ()=>{
              this.moreDataPage++;
              await this.$store.dispatch("getThreeTypeData", {page: this.moreDataPage, size: 5, type: this.type})
              this.cScroll.finishPullUp();    // 可以多次执行上拉刷新
            })
          }
          this.cScroll.hasVerticalScroll = true    // 开启： 使得数据不足时也可以拉动
        }catch (e) {console.log(e)}
      })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  
  .order_show_box
    width 100%
    max-height 1070px
    overflow hidden
    box-sizing border-box
    padding-top 30px
    font-size 28px
    background-color: #fff
    .order_show_content
      width 100%
      padding-top 30px
      .order_top_box
        background-color: #fff
        .top_title
          width 100%
          height 40px
          line-height 40px
          text-align center
          font-size 28px
          color #7f7f7f
        .top_subtitle
          width 100%
          height 48px
          margin-top 30px
          line-height 48px
          text-align center
          font-size 32px
          color #333
        .top_scroll_box
          margin 30px 0 30px
          .top_scroll
            float left
            display flex
            .scroll_item
              width 240px
              height 240px
              border-radius 15px
              >img
                width 100%
                height 100%
                border-radius 15px
      .order_content_box
        background-color: #fff
        width 100%
        .content_title
          width 100%
          margin-top 60px
          line-height 32px
          text-align center
          font-size 32px
          font-weight 700
          color #333
        .content_toggle
          margin-top 30px
          font-size 28px
          color #333
          display flex
          justify-content space-around
          >span
            padding 10px 30px
            display flex
            justify-content center
            align-items center
            background-color: #f4f4f4
            &.active
              font-weight 700
              color #b0955f
              background-color: #ffe4af
        .content_wrapper
          width 100%
          box-sizing border-box
          padding 30px 10px 10px 10px
          display flex
          column-count 2
          height auto
          .content_show
            box-sizing border-box
</style>
