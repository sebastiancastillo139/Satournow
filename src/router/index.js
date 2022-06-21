import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import ToursView from '../views/ToursView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Satournow',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Satournow/tours',
    name: 'tours',
    component: ToursView
  },
  {
    path: '/Satournow/users',
    name: 'userView',
    component: UserView,
    meta: { authRequired: true }
  },
  {
    path: "/Satournow/:catchAll(.*)",
    name: 'ErrorView',
    component: () => import('../views/ErrorView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import { getAuth } from "firebase/auth";

router.beforeEach((to, from, next) => {
  const { currentUser } = getAuth()
  const { meta: { authRequired } } = to
  window.scrollTo(0, 0)
  if (currentUser && authRequired) {
    next()
  } else if (!currentUser && authRequired) {
    next("/Satournow/ErrorView")
  }
  else if (currentUser && !authRequired) {
    next()
  }
  else {
    next()
  }
})

export default router
