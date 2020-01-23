import Vue from 'vue'
import Router from 'vue-router'

import TodoPage from '@/components/TodoPage'

import SignInRoutes from './signIn'
import SignUpRoutes from './signUp'
import HomeRoutes from './home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    SignInRoutes,
    SignUpRoutes,
    HomeRoutes,

    {
      path: '/todo',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
