import Sku from '@/components/XtxSku/index.vue'
import imageView from '@/components/imageView/index.vue'

export const componentsPlugin = {
  install(app){
    //app.component('组件名称',组件配置对象)
    app.component('XtxImageView',imageView)
    app.component('XtxSku',Sku)
  }
}