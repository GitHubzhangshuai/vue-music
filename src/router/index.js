import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
// import Singer from 'components/singer/singer'
// import Search from 'components/search/search'
// import Rank from 'components/rank/rank'
// import SingerDetail from 'components/singer-detail/singer-detail'
// import Disc from 'components/disc/disc'
// import Toplist from 'components/top-list/top-list'
// import UserCenter from 'components/user-center/user-center'
// vue-router路由懒加载（解决vue项目首次加载慢）
// 懒加载：----------------------------------------------------？
// 也叫延迟加载，即在需要的时候进行加载，随用随载。
const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const Disc = (resolve) => {
  import('components/disc/disc').then((module) => {
    resolve(module)
  })
}

const TopList = (resolve) => {
  import('components/top-list/top-list').then((module) => {
    resolve(module)
  })
}

const UserCenter = (resolve) => {
  import('components/user-center/user-center').then((module) => {
    resolve(module)
  })
}

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
      component: Recommend,
      children: [{
        path: ':id',
        component: Disc
      }]
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [{
        path: ':id',
        name: 'SingerDetail',
        component: SingerDetail
      }]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children: [{
        path: ':id',
        component: TopList
      }]
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
