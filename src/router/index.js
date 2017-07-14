import Vue from 'vue'
import Router from 'vue-router'
import Follow from '@/components/follow'
import Drama from '@/components/drama'
import DramaPlay from '@/components/dramaPlay'
import Channel from '@/components/channel'
import Disport from '@/components/disport'
import DisportPlay from '@/components/disportPlay'
import Article from '@/components/article'
import Recommend from '@/components/recommend'
import RecommendPlay from '@/components/recommendPlay'
import Search from '@/components/search'
import SearchPlay from '@/components/searchPlay'

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
      path: '/disportPlay/:aid',
      name: 'disportPlay',
      component: DisportPlay
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
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/recommendPlay/:aid',
      name: 'recommendPlay',
      component: RecommendPlay
    },
    {
      path: '/#/search',
      component: Search
    },
    {
      path: '/searchPlay/:aid',
      name: 'searchPlay',
      component: SearchPlay
    }
  ]
})
