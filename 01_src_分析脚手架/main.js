/* 该文件是整个项目的入口文件 必须要叫main.js不然报错 */

//引入vue（这是一个残缺的vue，不能解析template配置项）  这回不用script标签引用了
import Vue from 'vue'//脚手架里面自带了vue.js所以可以直接引用
//引入app组件，它是所有组件的父组件
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

//创建vue实例对象----vm
new Vue({
  /* template:`<App></App>`,//使用（在这里写这个配置项，容器里就可以干干净净，准备好一个容器就可以了）
	components:{App},//注册
  
  这个原本的写法是错误的
  引入了残缺版的vue，没人给你解析template属性（区别template标签，标签是可以解析的，脚手架引入了专门的库）
  
  */

  //下面这行代码一会解释，完成了这个功能：将app组件放入容器中 就不用注册组件了 也不用写组件标签
  render: h => h(App),//当引入残缺版的vue还想配置具体的内容就得借助render 不加引号

  /* 
    原本长这样，上面是简写
    render(h) {
    return h('h1','你好啊')//h1标签里放入你好啊
  }, */


}).$mount('#app')

//main.js文件非常重要，当执行npm run serve 这个命令之后，直接就去运行main.js                                          