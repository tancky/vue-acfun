import Vue from 'vue'
import Router from 'vue-router'
import Follow from '@/components/follow'
import Drama from '@/components/drama'
import Channel from '@/components/channel'
import Disport from '@/components/disport'
import Article from '@/components/article'
import Recommend from '@/components/recommend'
import Search from '@/components/search'
import DramaPlay from '@/components/dramaPlay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'follow',
      component: Follow
    },
    {
      path: '/follow',
      component: Follow
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/disport',
      name: 'disport',
      component: Disport
    },
    {
      path: '/channel',
      name: 'channel',
      component: Channel
    },
    {
      path: '/drama',
      name: 'drama',
      component: Drama
    },
    {
      path: '/drama/:season_id',
      name: 'dramaPlay',
      component: DramaPlay
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/#/search',
      component: Search
    },
  ]
})
