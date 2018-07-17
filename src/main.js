import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'
import 'lib-flexible'
import {Button, Row, Circle, Col, List, Swipe, SwipeItem, Lazyload, Tab, Tabs, Switch, Loading, Search, Checkbox, CheckboxGroup, NavBar,Field} from 'vant'
Vue.config.productionTip = false;

//fastclick 初始化
fastclick.attach(document.body)

//vue-lazyload 懒加载插件资源加载
Vue.use(VueLazyload, {
  loading: require('./common/imgages/loading.gif')
})
//使用vantUI组件
Vue.use(Button).use(Circle).use(Col).use(Row).use(List).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Switch).use(Loading).use(Search).use(Checkbox).use(CheckboxGroup).use(NavBar).use(Field)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
