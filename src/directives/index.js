//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install (app){
    //懒加载指令逻辑
    app.directive('img-lazy',{
      mounted(el,binding){
        //el绑定的元素
        //binding指令等号后面的值
        const {stop} = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if(isIntersecting){
              //进入视口区域
              el.src = binding.value
              //如果执行了useIntersectionObserver,就停止当前方法避免内存浪费
              stop()
            }
          },
        )
      }
    })
  }
}