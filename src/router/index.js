import Vue from 'vue'
import Router from 'vue-router'
import Invest from '@/components/Invest'
import Safe from '@/components/Safe'
import Account from '@/components/Account'
import Found from '@/components/Found'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/invest',
      name: 'invest',
      component: Invest
    },
    {
      path: '/safe',
      name: 'safe',
      component: Safe
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/found',
      name: 'found',
      component: Found
    }
  ]
})
