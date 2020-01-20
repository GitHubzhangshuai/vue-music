import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import Rank from 'components/rank/rank'

Vue.use(Router)

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
      component: Singer
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
