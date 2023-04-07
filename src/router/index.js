import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductPage from '../views/ProductsPage.vue'
import TestPage from '../views/TEstPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductsPage',
    component: ProductPage
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
