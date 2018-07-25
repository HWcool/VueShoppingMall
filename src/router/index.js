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

export default new Router({
  routes: [
    { path: '/', name: 'ShoppingMall', component: ShoppingMall },
    { path: '/ProductList', name: 'ProductList', component: ProductList },
    { path: '/ShoppingCart', name: 'ShoppingCart', component: ShoppingCart },
    { path: '/Mine', name: 'Mine', component: Mine },
    { path: '/Searched', name: 'Searched', component: Searched },
    {path: '/Register',name: 'Register',component: Register},
    {path: '/Login/',name: 'Login',component: Login},
  ]
})