<template>
  <div class="wrap">
    <img src="../assets/img/drama-banner.png" alt="" class="drama-banner">
    <ul class="drama-nav">
      <li>新番连载</li>
      <li>旧番补档</li>
      <li>国产动画</li>
      <li>动画资讯</li>
    </ul>
    <div class="new-drama">
      <img src="../assets/img/drama.png" alt="" class="fl">
      <h4>新番连载</h4>
      <div class="drama-content">
        <div class="drama-item col-xs-4 fl" @click="dramaPlay(item.season_id,item.title)" v-for="item in dramaList">
          <img :src="item.cover" alt="" class="drama-img">
          <div class="drama-info">
            <span class="drama-title">{{item.title}}</span>
            <p class="drama-num">更新至第{{item.newest_ep_index}}话</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {

          }
      },
      computed: {
          dramaList() {
              return this.$store.state.dramaList;
          }
      },
      created() {
        this.axios.get('https://api.imjad.cn/bilibili/?get=rank&content=global')
          .then (res => {
            this.$store.state.dramaList = res.data.result.list;
            console.log(res.data.result.list);
          })
      },
    methods: {
      dramaPlay(season_id,title) {
        this.$router.push(
          {name: 'dramaPlay', params: {'season_id': season_id}}
        )
        this.$store.state.dramaTitle= title
      }
    }

  }
</script>

<style lang="less" scoped>
  @import '../assets/css/drama.less';
</style>
