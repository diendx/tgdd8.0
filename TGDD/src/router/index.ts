import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/homepage/Home.vue'
import Login from '../views/Login.vue'
import ProductDetail from '../components/homepage/ProductDetail.vue'
import Search from '../components/homepage/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/homepage/Carts.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/product',
    name: 'ProductDetail',
    component:ProductDetail
  },
  {
    path: '/store',
    name: 'Search',
    component:Search
  },
]

const router = new VueRouter({
  routes
})

export default router
