
import { Indicator } from 'mint-ui'
import { Toast } from 'mint-ui';
export default {
  openIndicator () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'snake'
    })
  },
  closeIndicator () {
    Indicator.close()
  },
  register () {

    let instance = Toast({
      message: '签到成功',
      position: 'bottom'
    })

    setTimeout(() => {
      instance.close();
    }, 2000);
  },
  following () {

    let instance = Toast({
      message: '关注成功',
      position: 'bottom'
    })

    setTimeout(() => {
      instance.close();
    }, 2000);
  },
  pop () {
    let instance = Toast('未找到相应信息(´･_･`)')
    setTimeout(() => {
      instance.close();
    }, 2000);
  },
  cmtPop () {
    let instance = Toast('您还没有评论(´･_･`)')
    setTimeout(() => {
      instance.close();
    }, 2000);
  }
}
