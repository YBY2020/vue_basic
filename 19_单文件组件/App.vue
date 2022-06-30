<template>
	<div><!-- app.vue的功能就是汇总所有组件，一人之下万人之上 -->
		<School></School><!-- 安装了vetur之后，打一个<v再按回车就是快捷键，模板都给你排好了 -->
		<Student></Student>
	</div>
</template>

<script>
	//浏览器不能直接运行.vue文件   一番加工（通过1.webpack 2.脚手架）变成最纯粹的.js文件浏览器就认识了
	//引入组件
	import School from './School.vue'//.的意思是当前目录下  引用之后记得注册 再去模板里去用
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>



