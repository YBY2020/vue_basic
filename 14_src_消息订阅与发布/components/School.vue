<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'//引入pubsub-js
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {

			/* 【我们一般不用消息订阅与发布 因为要用到第三方库 我们直接用全局事件总线 原理是一样的】 */
			// console.log('School',this)
			/* this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			}) */

			//这段代码的意思是  如果有人发布了"hello"这个消息，就执行回调函数 其他都是模板 
			//那个id是怎么回事呢  你联想一下定时器  每次订阅消息它也有一个唯一的标识  为了取消订阅就必须有这个标识
			this.pubId = pubsub.subscribe('hello',(msgName,data)=>{//消息的接收方  首先订阅一个消息hello 后面那个箭头函数就是回调函数 this.pubId得到订阅消息的id，每次调用id都不一样，放到this身上
				console.log(this)//如果不是箭头函数，这里的this是undefined 这里也是大有文章 可以回听课程
				// console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
			})
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)//取消订阅 必须通过id取消订阅
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>