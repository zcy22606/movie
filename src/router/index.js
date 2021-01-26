import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movie',
    redirect: '/movie',
    component: () => import('../views/Movie.vue')
  },
  {
    path: '*',
    name: 'Movie',
    redirect: '/movie',
    component: () => import('../views/Movie.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/Movie.vue'),
    children: [
      {
        path: '/movie/hot',
        component: () => import('../views/Movie/Hot.vue')
      },
      {
        path: '/movie/coming',
        component: () => import('../views/Movie/Coming.vue')
      },
      {
        path: '',
        redirect: '/movie/hot',
        component: () => import('../views/Movie/Hot.vue')
      }
    ]
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import('../views/Information.vue')
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('../views/Center.vue')
  },
  {
    path: '/cinema',
    name: 'Cinema',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cinema.vue')
  },
  {
    path: '/data/:myid',
    name: 'Data',
    component: () => import(/* webpackChunkName: "about" */ '../views/Data.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
