import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import Rank from 'components/rank/rank'
import singerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)
// 解决两次访问相同路由地址报错
// vue-routerV3.1版本报错：message: "Navigating to current location ("/home") is not allowed",
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// 网上大佬似乎都说是因为vue-router3.1版本的问题
// 不过vue-router 官方在 2019-08-06 推出的 vue-router@3.1.1 似乎已经修复了此 bug
// 即安装的@3.1.1以上的版本都可以解决此问题

export default new Router({
  // linkActiveClass: 'myActive',
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [{
        path: ':id',
        name: 'singerDetail',
        component: singerDetail
      }]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
