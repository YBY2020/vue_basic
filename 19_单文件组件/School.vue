<template>
	<div class="demo"><!-- template标签对应html标签（.vue文件里不能像.html文件那么随意写，都是要写在标签里的，而且标签也不能乱写） 
		vscode本身不认识.vue这种文件所以不会显示高亮，要安装插件，如vetur-->
		<!-- template注释长这样 -->
		<h2>学校名称：{{name}}</h2><!-- 同时选中代码按tab向右缩进，shift+tab向左缩进 -->
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>


<script>/* 对应.js文件 脚本 交互相关的代码（数据、方法等等） */ //脚本的注释就是这样
	 export default {//省略Vue.extend 直接暴露配置对象
		name:'School',//最好大写与外面那个保持一致 然后最好取名，不取名的话别人注册的时候就随便给你取名了
		data(){
			return {
				name:'尚硅谷',
				address:'北京昌平'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
	//三种暴露方式（分别，统一，默认） 没有暴露就无法用import引用 
	//export{school} 统一暴露
	//export default school 默认暴露 一般用这个，引用的时候比较简单
</script>

<style>/* 对应.css文件 */
	.demo{/* 样式的注释长这样 */
		background-color: orange;
	}
</style>