<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {//最好在这个时机绑定
			// console.log('School',this)
			this.$bus.$on('hello',(data)=>{//这个hello不用事先声明，就在这里写就ok
				console.log('我是School组件，收到了数据',data)
			})
		},
		beforeDestroy() {//销毁之前解绑 不要一直占用公共资源
			this.$bus.$off('hello')
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>