<template>
  <div class="home_box clearfix">
    <KJFSwiper></KJFSwiper>
    <ServicePoicy></ServicePoicy>
    
    <UserNav></UserNav>    <!-- 商品导航 -->
    
    <div class="bossRecommen">
      <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="bossRecommen">
    </div>    <!-- boss推荐 -->
    
    <SceneLight></SceneLight>    <!-- 购物导航榜单 -->
    
    <PersonalShop></PersonalShop>    <!-- 私人定制 -->
    
    <Split></Split>
    
    <FlashSale></FlashSale>    <!-- 限时购 -->
    
    <Split></Split>
    
    <NewGoods></NewGoods>    <!-- 新品首发 -->
    
    <Split></Split>
    
    <PopularItem></PopularItem>    <!-- 人气推荐 -->
    
    <Split></Split>
    
    <TopicList></TopicList>    <!-- 专题精选 -->
    
    <Split></Split>
    
    <ZhongChou></ZhongChou>    <!-- 众筹 -->
    
    <CategoryModule></CategoryModule>
    <KJFMobileRight></KJFMobileRight>    <!-- 版权声明 -->
  </div>
</template>

<script>
  import KJFSwiper from "./components/KJFSwiper/KJFSwiper"
  
  import ServicePoicy from "./components/ServicePoicy/ServicePoicy"
  import UserNav from "./components/UserNav/UserNav"
  import SceneLight from "./components/SceneLight/SceneLight"
  import PersonalShop from "./components/PersonalShop/PersonalShop"
  import FlashSale from "./components/FlashSale/FlashSale"
  import NewGoods from "./components/NewGoods/NewGoods"
  import PopularItem from "./components/PopularItem/PopularItem"
  import TopicList from "./components/TopicList/TopicList"
  import ZhongChou from "./components/ZhongChou/ZhongChou"
  
  import CategoryModule from "./components/CategoryModule/CategoryModule"
  import KJFMobileRight from "./components/KJFMobileRight/KJFMobileRight"
  
  export default {
    name: 'Home',
    components:{
      KJFSwiper,
      KJFMobileRight,
      
      ServicePoicy,
      UserNav,
      SceneLight,
      PersonalShop,
      FlashSale,
      NewGoods,
      PopularItem,
      TopicList,
      ZhongChou,
  
      CategoryModule
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .home_box
    padding-top 150px
    padding-bottom 98px
    overflow-x hidden
    .bossRecommen
      height 160px
      margin-bottom 40px
      background-color #fff
      img
        height 100%
</style>
