<template>
  <div class="headpage">
    <div class="a-header" :style="{backgroundColor: skinColor}">
      <div class="headerwrap clearfix">
        <div class="left-header fl" @click="toggleSideBar">
          <i class="fa fa-bars"></i>
          <img src="https://ooo.0o0.ooo/2017/06/30/595605552345a.png" alt="user-pic" class="a-user-pic">
          <img src="https://ooo.0o0.ooo/2017/06/29/5954b017c80a7.png" alt="ac-Logo" class="ac-Logo">
        </div>
        <div class="right-header fr">
          <i class="fa fa-gamepad"></i>
          <i class="fa fa-download"></i>
          <i class="fa fa-history"></i>
          <i class="fa fa-search" @click="searchShow"></i>
        </div>
      </div>
      <div class="a-navbar">
        <ul>
          <li class="a-follow">
            <router-link to="/follow">关注</router-link>
          </li>
          <li class="a-recommend">
            <router-link to="/recommend">推荐</router-link>
          </li>
          <li class="a-drama">
            <router-link to="/drama">番剧</router-link>
          </li>
          <li class="a-disport">
            <router-link to="/disport">娱乐</router-link>
          </li>
          <li class="a-article">
            <router-link to="/article">文章</router-link>
          </li>
          <li class="a-channel">
            <router-link to="/channel">频道</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--内容区-->
    <div class="a-content">
      <router-view></router-view>
    </div>
    <!--侧边栏-->
    <transition name="fold">
      <div class="a-sidebar" v-if="sideBarShow">
        <div class="user">
          <img src="https://ooo.0o0.ooo/2017/06/30/595605552345a.png" alt="">
          <div class="user-icon">
            <i class="fa fa-envelope"></i>
            <i class="fa fa-moon-o" @click="changeColor('black')" v-if="isShowSkin"></i>
            <i class="fa fa-sun-o" @click="changeColor('#fd4c5d')" v-if="!isShowSkin"></i>
          </div>
          <div class="user-desc">
            <div class="user-name">
              <span>Tancky</span>
            </div>
            <div class="user-info">
              <span class="user-grade">LV 12</span>
              <span class="user-vip">正式会员</span>
              <img src="https://ooo.0o0.ooo/2017/06/29/5954b623af533.png" alt="banana">
              <span>3</span>
            </div>
          </div>
        </div>
        <div class="a-sideItem">
          <div class="SignIn" :style="signIn" @click="sign">
            <span>{{message}}</span>&nbsp;&nbsp;{{getBanana}}
          </div>
          <ul class="sidelist">
            <li>
              <img class="tag" slot="icon" src="../assets/img/play_history.png" width="24" height="24">
              <span>历史记录</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/downloaded.png" width="24" height="24">
              <span>离线缓存</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/ic_following_and_followers.png" width="24" height="24">
              <span>关注和粉丝</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/favorites.png" width="24" height="24">
              <span>我的收藏</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/uploaded.png" width="24" height="24">
              <span>我的投稿</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/game_center.png" width="24" height="24">
              <span>游戏中心</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/market.png" width="25" height="24">
              <span>周边商城</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/settings.png" width="24" height="24">
              <span>设置</span>
            </li>
            <li>
              <img class="tag" slot="icon" src="../assets/img/feedback.png" width="24" height="24">
              <span>意见反馈</span>
            </li>
          </ul>
          </div>
      </div>
    </transition>
    <!--侧边栏模态框-->
    <transition name="fade">
      <div v-show="sideBarShow">
        <div class="mask" @click="toggleSideBar"></div>
      </div>
    </transition>
    <!--搜索组件-->
    <transition name="slide">
      <div class="search" v-if="searchbarShow">
        <div class="searchBar">
          <div class="s-head">
            <i class="fa fa-angle-left" @click="back"></i>
              <input type="text" placeholder="输入关键词或AC号" v-model="keywords" @keypress.enter="searchSub">
            <i class="fa fa-search " @click="searchSub"></i>
          </div>
          <div class="searchList" v-show="isListShow">
            <ul>
              <li v-for="list in searchList" @click="searchPlay(list.aid, list.title, list.description, list.author)">
                <img :src="list.pic" alt="" class="pic">
                <span class="title">{{list.title}}</span>
                <span class="author">UP主: {{list.author}}</span>
              </li>
            </ul>
          </div>
          <div class="s-hot">
            <h2>热门搜索</h2>
            <ul class="hot-list">
              <li>木鱼微剧场</li>
              <li>评论才是本体</li>
              <li>宇宙大新闻</li>
              <li>越狱</li>
              <li>野食小哥</li>
              <li>奥雷</li>
              <li>瞎看什么</li>
              <li>STN快报</li>
              <li>中国交通事故合集</li>
              <li>暴走大事件</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
    data() {
      return {
        sideBarShow: false,
        isShowSkin: true,
        keywords: '',
        message: '签到',
        getBanana: '领取香蕉',
        signIn: {
            color: '#fff',
            backgroundColor: '#fd4c5d'
        }
      }
    },
    created() {

    },
    computed: {
      skinColor() {
        return this.$store.state.skinColor
      },
      searchbarShow() {
        return this.$store.state.searchbarShow
      },
      searchList() {
        return this.$store.state.searchList
      },
      isListShow() {
        return this.$store.state.isListShow
      }
    },
    methods: {
      toggleSideBar() {
        this.sideBarShow= ! this.sideBarShow
      },
      searchShow () {
        this.$router.push(
          { path: '/#/search'}
        )
        this.$store.state.searchbarShow = ! this.$store.state.searchbarShow
      },
      changeColor(color) {
        this.$store.commit('changeColor',color)
        this.isShowSkin = !this.isShowSkin
        localStorage.skinColor = color
      },
      searchSub () {
        let keywords = this.keywords
        this.util.openIndicator()
        this.axios.post('https://api.imjad.cn/bilibili/?get=search&keyword=' + keywords ).then((res) => {
          this.util.closeIndicator()
          this.$store.state.searchList = res.data.result.video
          this.$store.state.isListShow = true
        }).catch((error) => {
          this.util.pop()
          this.keywords = ''
        })
      },
      searchPlay (aid, title, description,author) {
        this.$router.push(
          {name: 'searchPlay', params: {'aid': aid}}
        )
        this.$store.state.searchTitle = title
        this.$store.state.searchDesc = description
        this.$store.state.searchAuthor = author
        this.$store.state.isListShow = false;
        this.$store.state.searchbarShow = false;
      },
//      函数命名冲突会导致 fns.apply is not a function
      sign() {
         this.message = '今日已签到',
         this.getBanana = '',
         this.signIn = {
           color: '#000',
           backgroundColor: '#fff',
           transition: 'all .2s'
         },
         this.util.register();

      },
      back () {
        this.$router.push(
          {path: '/recommend'}
        )
        this.$store.state.searchbarShow  = false
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/css/header.less';
</style>
