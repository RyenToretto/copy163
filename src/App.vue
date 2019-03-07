<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-size 14px!important
    font-family 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif
    -webkit-text-size-adjust none
    -webkit-tap-highlight-color rgba(0,0,0,0)
</style>
