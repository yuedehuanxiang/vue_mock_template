import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import test2 from '@/components/test2'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/demo',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/demo/test2',
      name: 'test2',
      component: test2
    }
  ]
})
