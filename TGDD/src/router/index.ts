import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/homepage/Home.vue'
import Login from '../views/Login.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
