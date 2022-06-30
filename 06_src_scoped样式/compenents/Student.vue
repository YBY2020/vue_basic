<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="atguigu">学生性别：{{sex}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		}
	}
</script>

<style lang="less" scoped>/* lang是语言  可以是css或less 用less的话要安装less-loader 老师说安装7其实我这里安装6才不会报错*/
	.demo{
		background-color: pink;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
