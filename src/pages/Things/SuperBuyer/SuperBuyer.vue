<template>
  <div class="super_buyer_box">
    <div class="super_buyer_content">
      <ul v-for="(recommend, index) in recommendData" :key="index">
        <li v-for="(topic, index) in recommend.topics" :key="index">
          &nbsp;&nbsp;&nbsp;&nbsp;SuperBuyer&nbsp;&nbsp;&nbsp;&nbsp;{{index}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
    name: 'SuperBuyer',
    components: {
    
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        recommendData: state=>state.things.recommendData
      })
    },
    async mounted () {
      this.$nextTick(()=>{
        try {
          if(this.recScroll){
            this.recScroll.refresh()
          }else{
            this.recScroll = new BScroll(".super_buyer_box", {
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
              // this.moreDataPage++;
              // await this.$store.dispatch('getMoreRecommendData', {page: this.moreDataPage, size: 5})
              this.recScroll.finishPullUp();    // 可以多次执行上拉刷新
            })
          }
        }catch (e) {console.log(e)}
      })
      await this.$store.dispatch("getRecommendData")
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  
  .super_buyer_box
    width 100%
    max-height 1070px
    overflow hidden
    box-sizing border-box
    padding-top 30px
    font-size 28px
    background-color: #fff
    .super_buyer_content
      width 100%

</style>
