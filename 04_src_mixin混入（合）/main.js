//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import {hunhe,hunhe2} from './mixin'  //注意是要先引入再用
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)//全局混合，所有的vc以及vm都能得到这个东西  一般不这么写
Vue.mixin(hunhe2)


//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})