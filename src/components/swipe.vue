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
      }

  }
</script>

<style lang="less" scoped>
  @import '../assets/css/swipe.less';
</style>
