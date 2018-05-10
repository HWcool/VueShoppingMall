import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import ProductList from '@/components/pages/ProductList'
import ShoppingCart from '@/components/pages/shoppingCart'
import Mine from '@/components/pages/mine'
import 'lib-flexible'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'ShoppingMall', component: ShoppingMall},
    {path: '/ProductList', name: 'ProductList', component: ProductList},
    {path: '/ShoppingCart', name: 'ShoppingCart', component: ShoppingCart},
    {path: '/Mine', name: 'Mine', component: Mine}
  ]
})