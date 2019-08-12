import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue';
import routerView from "./router-view/router-view"
import search from "./components/search/search"
import tab from "./components/tab/tab"
import card from "./components/card/card"
import shopping from "./components/shopping/shopping"
import va from "./components/va/va"
import other from "./components/other/other"
import axios from 'axios'
import VueJsonp from 'vue-jsonp'

Vue.use(ElementUI);
Vue.component("routerView",routerView)
Vue.component("search",search)
Vue.component("tab",tab)
Vue.component("card",card)
Vue.component("shopping",shopping)
Vue.component("va",va)
Vue.component("other",other)
Vue.prototype.$axios = axios
Vue.use(VueJsonp)

new Vue({
  el: '#app',
  render: h => h(App)
});