import Vue from 'vue'
import Router from 'vue-router'
import Invest from '@/components/Invest'
import Safe from '@/components/Safe'
import Account from '@/components/Account'
import Found from '@/components/Found'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/invest',
      name: 'invest',
      component: Invest,
      meta:{
        title:'投资',
        showTabBar:true
      }
    },
    {
      path: '/safe',
      name: 'safe',
      component: Safe,
      meta:{
        title:'安全',
        showTabBar:true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta:{
        title:'账户',
        showTabBar:true
      }
    },
    {
      path: '/found',
      name: 'found',
      component: Found,
      meta:{
        title:'发现',
        showTabBar:true
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    // 设置页面标题
    document.title=to.meta.title
  }

  // 控制路由跳转
  next()
})

export default router
