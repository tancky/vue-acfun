<template>
  <div class="wrap">
    <a-swipe></a-swipe>
    <div class="monkey-topLine">
      <img src="http://imgs.aixifan.com/cms/2017_03_03/1488528971079.gif?imageView2/1/w/100/h/100" alt="" class="fl">
      <h4>猴山头条</h4>
    </div>
    <div class="top-content">
      <div class="top-item col-xs-6" v-for="item in recommendList" key="item.aid">
        <img :src="item.pic" alt="" class="show-img">
        <div class="top-info">
          <span class="top-tag">【{{item.typename}}】</span>
          <span class="top-title">{{item.title}}</span>
          <div class="top-user">
            <span class="top-author">{{item.author}}</span>
            <i class="fa fa-eye"></i>
            <span class="watch-num fr">{{item.play}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import aSwipe from '@/components/swipe.vue'

  export default {
      data() {
          return {

          }
      },
      components: {
          aSwipe
      },
      computed: {
          recommendList() {
              return this.$store.state.recommendList;
          }
      },
      created() {
          this.axios.get('/api/recommend-list')
            .then(res => {
              this.$store.state.recommendList = res.data.list;
//              console.log(res.data.list);
            })
      }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/recommend.less';
</style>
