<template>
	<div class="demo">
		<h2 class="title">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		}
	}
</script>

<style scoped>/* scoped有范围的意思，用了这个属性解决了样式重名冲突 */
	.demo{
		background-color: skyblue;
	}
</style>