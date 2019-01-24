import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import zhts from '@/components/business/sync'
import znfx from '@/components/business/znfx'
import fzjc from '@/components/business/fzjc'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Vue,
      redirect: '/zhts'
    },
    {
      path: '/zhts',
      name: 'zhts',
      component: zhts
    },
    {
      path: '/znfx',
      name: 'znfx',
      component: znfx
    },
    {
      path: '/fzjc',
      name: 'fzjc',
      component: fzjc
    }
  ]
})
