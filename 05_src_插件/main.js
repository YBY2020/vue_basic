//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins' //必须先引入再应用
//关闭Vue的生产提示
Vue.config.productionTip = false

//应用（使用）插件  .use  api   意思就是有人帮你调用install方法了
Vue.use(plugins,1,2,3) //可以传参
//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})