<template>
  <div class="things_box">
    <HeaderSlot>
      <div slot="fond" @click="isFond=true;$router.replace('/things/recommend')"><span :class="{active: isFond}">发现</span></div>
      <div slot="specia_choice" @click="isFond=false;$router.replace('/things/ordershow')"><span
        :class="{active: !isFond}">甄选家</span></div>
    </HeaderSlot>
    
    <div class="things_tab">
      <ul>
        <li :class="{active: curTab===tab.tabId}" @click="switchTab(tab.tabId)"
            v-for="(tab, index) in tabs" :key="index">
          {{tab.tabName}}
        </li>
      </ul>
    </div>
    
    <div class="things_content">
      <RouterView></RouterView>
    </div>
    
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Things',
    data () {
      return {
        isFond: true,
        curTab: 9
      }
    },
    computed: {
      ...mapState({
        tabs: state=>state.things.tabs
      })
    },
    methods: {
      switchTab(tabId){
        this.curTab=tabId
        switch (tabId) {
          case 9: {    // 推荐
            this.$router.replace("/things/recommend");
            break
          }
          case 10: {    // 收纳秘诀
            // this.$router.replace("/things/collectionsecret");
            this.$router.replace("/things/ordershow");
            break
          }
          case 12: {    // 20元好物
            break
          }
          case 7: {    // 晒单
            this.$router.replace("/things/ordershow");
            break
          }
          case 4: {    // 达人
            // this.$router.replace("/things/superbuyer");
            this.$router.replace("/things/ordershow");
            break
          }
          case 6: {    // HOME
            // this.$router.replace("/things/thingshome");
            this.$router.replace("/things/ordershow");
            break
          }
          default: {
            console.log("Router Switch Error.")
            this.$router.replace("/things/ordershow");
          }
        }
      }
    },
    async mounted () {
      await this.$store.dispatch("getTabs")
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  
  .things_box
    width 100%
    .things_tab
      position fixed
      top 88px
      left 0
      width 100%
      height 74.5px
      overflow hidden
      font-size 28px
      border-top 1px solid #ddd
      background-color: #fafafa
      >ul
        width 100%
        height 100%
        display flex
        justify-content space-around
        >li
          height 100%
          box-sizing border-box
          padding 0 10px
          line-height 74.5px
          &.active
            color $themeColor
            border-bottom 6px solid $themeColor
    .things_content
      width 100%
      min-height 1332px
      box-sizing border-box
      padding 162.5px 0 100px 0
</style>
