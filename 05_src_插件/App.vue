<template>
	<div>
		<School/>
		<hr>
		<Student/>
	</div>
</template>

<script>
	import School from './compenents/School.vue'
	import Student from './compenents/Student.vue'

	export default {
		name:'App',
		components:{School,Student}
	}
</script>
