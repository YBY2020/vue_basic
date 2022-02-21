//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {//必须要有这句 借用这个钩子（最开头的） 不然等模板解析完了你再来就晚了
		//加个$是为了迎合vue的设计  api身上一般带个$
		Vue.prototype.$bus = this //安装全局事件总线 要让所有的组件都看得见  .prototype往原型上写  而且需要能调用$on $emit $off（他们都在vue的原型上 只有vc vm能调用到）
	},
})