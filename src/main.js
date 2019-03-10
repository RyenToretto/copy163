import Vue from 'vue'
import App from './App'

import router from "./router"
import store from "./vuex/store"
import {Button} from 'mint-ui'

import "./mockData/mockServer"
import "./filter"

import VueLazyLoad from "vue-lazyload"
import loadingGIF from "./common/img/loading.gif"

import Split from './components/Split/Split.vue'
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue'

Vue.use(VueLazyLoad, {loading: loadingGIF})

// 注册为全局组件标签
Vue.component(Button.name, Button)
Vue.component('Split', Split);
Vue.component('HeaderSlot', HeaderSlot);

Vue.store = store

new Vue({
  el: '#app',
  render: createElement=>createElement(App),
  router,    // 配置路由器
  store
});
