<template>
  <div>
    <mt-button type="primary" class="upload" @click="upload">上传文件</mt-button>
    <mt-progress :value="value" :bar-height="3" v-if="uploadShow">
      <div slot="end">{{value}}%</div>
    </mt-progress>
  </div>
</template>

<script>
  import { Progress,Button,Toast } from 'mint-ui';

  export default {
      data() {
          return {
            uploadShow: false,
            value: 0
          }
      },
    methods: {
      upload() {
        let that =this;
        that.uploadShow= !that.uploadShow;
        that.upload=setInterval(()=> {
            that.value++ ;
            if(that.value >= 100){
              let instance = Toast({
                message: '上传成功',
                position: 'bottom',
                duration: 5000
              });
              setTimeout(() => {
                instance.close();
              }, 2000);
              clearInterval(that.upload);
            }
        },10)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/progressbar.less';
</style>
