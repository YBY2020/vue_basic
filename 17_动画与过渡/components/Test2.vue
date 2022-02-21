<template>
	<div>
		<!-- 这里是用过渡来写 需要起点配合终点-->
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group name="hello" appear><!-- transition只能给单个元素加  多个元素想要实现同一个过渡就必须用transition-group而且每个元素都需要加一个key属性 -->
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">尚硅谷！</h1>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	/* 【进入的起点】、离开的终点     进入的起点其实就是离开的终点*/
	.hello-enter,.hello-leave-to{
		transform: translateX(-100%);
	}
	.hello-enter-active,.hello-leave-active{  /* 这里加过渡  这样就完全不用动我们的DOM元素了 */
		transition: 0.5s linear;
	}
	/* 【进入的终点】、离开的起点 */
	.hello-enter-to,.hello-leave{
		transform: translateX(0);
	}

</style>