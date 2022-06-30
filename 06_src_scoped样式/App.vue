<template>
	<div>
		<h1 class="title">你好啊</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
	import Student from './compenents/Student.vue'
	import School from './compenents/School.vue'//引入的顺序能影响样式的覆盖顺序（后来者居上），注意不是组件的使用顺序而是引入顺序 因为是先引入再解析模板

	export default {
		name:'App',
		components:{School,Student}
	}
</script>

<style scoped>/* app组件里不要用scope 不然就不是全局可用了，只有app里的标签能用 */
	.title{
		color: red;
	}
</style>
