import App from './App.vue'//只引入app.vue就可以，其他都归他管

new Vue({//.vue文件里可不能写这个 main.js 有的脚手架里叫index.js,react里叫app.js
	el:'#root',
	template:`<App></App>`,//使用（在这里写这个配置项，容器里就可以干干净净，准备好一个容器就可以了）
	components:{App},//注册
})