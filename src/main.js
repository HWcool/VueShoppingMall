import Vue from 'vue';
import App from './App';
import router from './router';
import {Button, Row, Circle, Col, List, Swipe, SwipeItem, Lazyload} from 'vant';
Vue.config.productionTip = false;
Vue.use(Button).use(Circle).use(Col).use(Row).use(List).use(Swipe).use(SwipeItem).use(Lazyload);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
