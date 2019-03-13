<template>
  <div class="recommend_box">
    <div class="recommend_content">
      <ul v-for="(recommend, index) in recommendData" :key="index">
        <li v-for="(topic, index) in recommend.topics" :key="index">
          <Line3Show v-if="topic.style===1" :topic="topic"></Line3Show>
          <LeftRightShow v-if="topic.style===2" :topic="topic"></LeftRightShow>
          <SomePicShow v-if="topic.style===3" :topic="topic"></SomePicShow>
          <SwiperShow v-if="topic.style===4" :topic="topic"></SwiperShow>
        </li>
      </ul>
    
      <ul v-for="(recommend, rIndex) in moreRecommendData.result" :key="rIndex+Date.now()">
        <li v-for="(topic, tIndex) in recommend.topics" :key="tIndex-2+Date.now()">
          <Line3Show v-if="topic.style===1" :topic="topic"></Line3Show>
          <LeftRightShow v-if="topic.style===2" :topic="topic"></LeftRightShow>
          <SomePicShow v-if="topic.style===3" :topic="topic"></SomePicShow>
          <SwiperShow v-if="topic.style===4" :topic="topic" :index="rIndex+tIndex+Math.round(Math.random()*9999)"></SwiperShow>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Line3Show from './components/Line3Show/Line3Show'
  import LeftRightShow from './components/LeftRightShow/LeftRightShow'
  import SomePicShow from './components/SomePicShow/SomePicShow'
  import SwiperShow from './components/SwiperShow/SwiperShow'
  
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
    name: 'Recommend',
    components: {
      Line3Show,
      LeftRightShow,
      SomePicShow,
      SwiperShow
    },
    data () {
      return {
        moreDataPage: 1
      }
    },
    computed: {
      ...mapState({
        recommendData: state=>state.things.recommendData,
        moreRecommendData: state=>state.things.moreRecommendData
      })
    },
    async mounted () {
      this.$nextTick(()=>{
        try {
          if(this.recScroll){
            this.recScroll.refresh()
          }else{
            this.recScroll = new BScroll(".recommend_box", {
              click: true,
              probeType: 2,
              scrollX: false,
              scrollY: true,
              bounce: false,    // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
              //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
              //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
              pullUpLoad: true
            })
            this.recScroll.on("pullingUp", async ()=>{
              this.moreDataPage++;
              await this.$store.dispatch('getMoreRecommendData', {page: this.moreDataPage, size: 5})
              this.recScroll.finishPullUp();    // 可以多次执行上拉刷新
            })
          }
        }catch (e) {
        
        }
        
      })
      await this.$store.dispatch("getRecommendData")
      await this.$store.dispatch("getMoreRecommendData", {page: 1, size: 5})
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  
  .recommend_box
    width 100%
    max-height 1070px
    overflow hidden
    box-sizing border-box
    padding-top 30px
    font-size 28px
    background-color: #fff
    .recommend_content
      width 100%
    
</style>
