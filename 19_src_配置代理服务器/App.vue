<template>
	<div>
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStudents(){
				axios.get('http://localhost:8080/students').then(//public文件夹里的东西都算是8080这个代理服务器里有的  然后他有了就会直接给你不会去5000那个你真正要请求的服务器要了
					response => {
						console.log('请求成功了',response.data)
					},
					error => {//cors解决跨域问题(需要后端配置响应头)   jsonP解决跨域问题(巧妙运用src属性不受同源策略影响的原理)   配置一个代理服务器解决跨域问题(浏览器与服务器之间有同源策略  但是服务器与服务器之间没有)
 						console.log('请求失败了',error.message)
					}
				)
			},
			getCars(){
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			}
		},
	}
</script>
