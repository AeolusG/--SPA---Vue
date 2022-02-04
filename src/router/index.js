import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../components/Table.vue'
import UserPage from '../components/UserPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/table',
    name: 'table',
    component: Table
    },
  {
    path: '/table/:id',
    name: 'UserPage',
    component: UserPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
