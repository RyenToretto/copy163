<template>
  <div class="swiper_show_box">
    <div class="swiper_show_title">{{topic.title}}</div>
    
    <div :class="'swiper_box'+index" class="swiper_box">
      <ul class="swiper_show">
        <li v-for="(item, index) in topic.lookList" :key="index" :class="{active: ((ul.hideCount+(sScroll.directionX===1?2:1))===index)}">
          <a href="javascript:">
            <img v-lazy="item.picUrl" :src="item.picUrl" alt="topic">
          </a>
        </li>
      </ul>
    </div>
    <Split></Split>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  
  export default {
    name: 'SwiperShow',
    props: {
      topic: Object,
      index: Number
    },
    data () {
      return {
        sScroll: {},
        ul: {
          oldX: 0,
          hideX: 0,
          hideCount : 0,
          first: 0,
          second: 1,
          third: 2
        }
      }
    },
    mounted () {
      this.$nextTick(()=>{
        try{
          this.sScroll = new BScroll(".swiper_box"+this.index, {
            click: true,
            scrollX: true,
            probeType: 3
          })
  
          this.sScroll.on("scroll", (e)=>{
            this.ul.hideX += this.ul.oldX-e.x
            this.ul.oldX = e.x
            this.ul.hideCount = Math.floor(this.ul.hideX/250)
          })
        }catch (e) {
        
        }
      })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../../common/stylus/mixins.styl"
  
  .swiper_show_box
    width 100%
    box-sizing border-box
    background-color: #fff
    .swiper_show_title
      margin 0 0 20px 30px
      font-size 36px
      color #333
    .swiper_box
      width 100%
      height 250px
      .swiper_show
        height 100%
        float left
        display flex
        padding-right 0px
        >li
          width 250px
          height 250px
          transition 500ms transform
          transform scale(0.7)
          &.active
            transform scale(1)
          >a
            width 100%
            height 100%
            >img
              width 100%
              height 100%
</style>
