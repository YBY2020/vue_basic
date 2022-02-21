<template>
	<div>
		<Student name="李四" sex="女" :age="18"/><!-- 加一个冒号，双向数据绑定，把引号里的18识别成变量（数字）而不是字符串，这样后续好进行数学操作 -->
	</div>
</template>

<script>
	import Student from './compenents/Student.vue'

	export default {
		name:'App',
		components:{Student}
	}
</script>
