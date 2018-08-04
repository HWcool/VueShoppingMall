import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const ShoppingMall = () => import('@/components/pages/ShoppingMall')
const ProductList = () => import('@/components/pages/ProductList')
const ShoppingCart = () => import('@/components/pages/ShoppingCart')
const Mine = () => import('@/components/pages/Mine')
const Searched = () => import('@/components/pages/Searched')
const Register = () => import('@/components/pages/Register')
const Login = () => import('@/components/pages/Login')
const Goods = () => import('@/components/pages/Goods')

export default new Router({
  routes: [
    { path: '/', name: 'ShoppingMall', component: ShoppingMall },
    { path: '/productList', name: 'productList', component: ProductList },
    { path: '/shoppingCart', name: 'shoppingCart', component: ShoppingCart },
    { path: '/mine', name: 'mine', component: Mine },
    { path: '/searched', name: 'searched', component: Searched },
    { path: '/register', name: 'register',component: Register},
    { path: '/login', name: 'login',component: Login},
    { path: '/goodsInfo', name: 'goodsInfo', component: Goods}
  ]
})