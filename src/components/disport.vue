<template>
  <div class="wrap">
    <div class="disport-header">
      <a-swipe></a-swipe>
      <ul class="disport-nav">
        <li>生活娱乐</li>
        <li>鬼畜调教</li>
        <li>萌宠</li>
        <li>美食</li>
        <li>综艺</li>
      </ul>
    </div>
    <div class="hot-disport">
      <img src="../assets/img/top100.png" alt="" class="hot-top" >
      <div class="disport-content">
        <div class="disport-item col-xs-6 fl" v-for="item in disportList" @click='disportPlay(item.aid,item.title, item.author)'>
          <img :src="item.pic" alt="" class="disport-img">
          <div class="disport-info">
            <span class="disport-title">{{item.title}}</span>
            <div class="disport-user">
              <span class="disport-author">{{item.author}}</span>
              <i class="fa fa-eye"></i>
              <p class="disport-num fr">{{item.play}}</p>
            </div>
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
        disportList() {
          return this.$store.state.disportList;
        }
      },
      created() {
        this.axios.get('https://api.imjad.cn/bilibili/?get=rank&content=5')
          .then (res => {
            this.$store.state.disportList = res.data.rank.list;
             console.log(res.data);
          })
      },
      methods: {
        disportPlay(aid, title, author) {
          this.$router.push({
            name: 'disportPlay',
            params: {
              'aid' : aid
            }
          })
          this.$store.state.disportTitle = title
          this.$store.state.disportAuthor = author
        }
      }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/disport.less';
</style>
