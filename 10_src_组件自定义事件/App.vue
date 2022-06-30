<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>

		<!-- 这一节比较绕但其实不难，忘了的话再听一遍课 -->

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>

		<!-- 通过父组件给子组件绑定一个自定义事件，实现：子给父传递数据（第一种写法，使用@或v-on） 不用去定义atguigu 先声明，然后再绑定-->
		<!-- <Student @atguigu="getStudentName" @demo="m1"/> -->  <!-- 如何触发绑定在子组件上这个事件呢？(这个事件并不需要写)在谁身上就去哪里触发（这句话很重要！！！给谁绑定事件就在谁身上触发） -->

		<!-- 只能是子传父 你要用到子组件的标签就确定了父子关系 在父组件里给子组件绑定上自定义事件，子组件去触发 -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） 更灵活，可以延迟-->
		<Student ref="student" @click.native="show"/><!-- .native让vue知道click是原生的dom事件，不然它默认就是自定义事件 -->
	</div>
</template>

<script>
	import Student from './compenents/Student.vue'
	import School from './compenents/School.vue'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名：',name)
			},
			getStudentName(name,...params){//那边传参这边收参数  如果有多个参数 可以包装成一个对象传过来 或者用...params，意思是，除了name都整理成一个对象存到params
				console.log('App收到了学生名：',name,params)
				this.studentName = name//这句很重要，把外部传过来的name给到自己data里的name
			},
			m1(){
				console.log('demo事件被触发了！')
			},
			show(){
				alert(123)
			}
		},
		mounted() {
			this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件 通过$refs拿到student
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
