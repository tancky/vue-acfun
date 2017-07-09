<template>
  <div class="follow">
    <div class="f-head clearfix">
      <h4 class="fl">追的番剧</h4>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="box">
      <span>您还没有在追的番剧哦 ~</span>
      <img src="../assets/img/follow-pic.png" alt="">
    </div>
    <a-progressbar></a-progressbar>
  </div>
</template>

<script>
  import aProgressbar from '@/components/progressbar.vue'

  export default {
      data() {
        return {

        }
      },
    components: {
        aProgressbar
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/follow.less';
</style>
