<template>
  <div class="wrap">
    <div class="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item name="i" v-for="data in banner" key="data.id">
          <img :src="data.pic">
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
        banner () {
          return this.$store.state.banner
        }
      },
    // 生命周期钩子函数，在created函数中调用ajax获取页面初始化所需的数据。
      created () {
          this.axios.get('/api/banner')
            .then(res => {
              this.$store.state.banner=res.data.data
//              console.log(res)
            })
      }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/swipe.less';
</style>
