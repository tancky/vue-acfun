<template>
  <div class="wrap">
    <div class="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <img src="http://i0.hdslb.com/bfs/archive/98214e7feaf972248e8f408d6178b91bb70451b7.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://i0.hdslb.com/bfs/archive/c6e8b040acffd6a7403795ea4141776071b1d901.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://i0.hdslb.com/bfs/archive/9e630ace5bdd1ac947a3add9bf43db4b11cf49f6.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://i0.hdslb.com/bfs/archive/a55e48a158d81ce665f56d6e894b4fd5ce3ed69d.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://i0.hdslb.com/bfs/archive/1a5b75a23d0b9a0186969fdb7941e720eec44bab.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {

    data() {
      return {
      }
    },
    computed: {
//        banner () {
//          return this.$store.state.banner
//        }
    },

    // 生命周期钩子函数，在created函数中调用ajax获取页面初始化所需的数据。
//      created () {
//          this.axios.get('/api/banner')
//            .then(res => {
//              this.$store.state.banner=res.data.data
////              console.log(res)
//            })
//      }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/swipe.less';
</style>
