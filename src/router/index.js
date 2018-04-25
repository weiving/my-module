import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import paginationIndex from '@/components/pagination/paginationIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pagination/paginationIndex',
      name: 'paginationIndex',
      component: paginationIndex
    }
  ]
})
