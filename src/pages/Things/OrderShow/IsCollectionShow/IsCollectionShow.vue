<template>
  <div class="is_collection_box">
    <div class="pic_show">
      <img v-lazy="topic.collection.picUrl" :src="topic.collection.picUrl" alt="New">
    </div>
    <p class="title ellipsis">{{topic.collection.title}}</p>
    <p class="subtitle ellipsis">{{topic.collection.subtitle}}</p>
  </div>
</template>

<script>
  export default {
    name: 'NotCollectionShow',
    props: {
      topic: Object
    },
    data () {
      return {}
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  
  .is_collection_box
    width 345px
    border-radius 15px
    overflow hidden
    margin 0 10px 20px 10px
    box-sizing border-box
    font-size 24px
    background-color #fff
    box-shadow 0 0 3px #333333
    >.pic_show
      width 100%
      >img
        width 100%
    >.title
      width 88%
      margin 30px auto 20px
      line-height 34px
      text-align center
      font-size 32px
      font-weight 700
      color #333
    >.subtitle
      width 100%
      margin 30px 0 20px
      line-height 34px
      text-align center
      font-size 24px
      color #333
</style>
