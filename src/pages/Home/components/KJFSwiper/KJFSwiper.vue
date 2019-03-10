<template>
  <div class="top_swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(i,index) in imgNodes" :key="index">
          <img v-lazy="i" :src="i" alt="img"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import "../../../../common/swiper/swiper.css"
  import Swiper from "swiper"
  
  export default {
    name: 'KJFSwiper',
    data () {
      return {
        imgNodes: ['https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      }
    },
    mounted() {
      new Swiper('.top_swiper .swiper-container', {
        autoplay: true,    //可选选项，自动滑动
        loop: true,
        pagination: {
          el: '.top_swiper .swiper-pagination',
          type: 'custom',
          clickable: true,
          // 自定义分页器
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i === (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return customPaginationHtml;
          }
        },
      })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 367.5px
    font-size 200px
    .swiper-slide
      position relative
      img
        width 100%
        height auto
        position absolute
        left 0
        top 50%
        transform: translateY(-50%)
</style>
<style>
  /* 注意： 不能在 scoped 中写轮播图的样式 */
  /* 自定义分页器的样式，这个你自己想要什么样子自己写 */
  .swiper-pagination-customs {
    width: 40px;
    height: 4px;
    display: inline-block;
    background: #fff;
    opacity: 0.4;
    border-radius: 0;
    margin: 0 10px 0 0;
  }
  
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background: #f00;
    border-radius: 0;
  }
  
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #333;
    border: none;
    vertical-align: middle;
  }
  
  .swiper-pagination-bullet-active {
    border: none;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 12px;
    height: 12px;
  }
</style>
