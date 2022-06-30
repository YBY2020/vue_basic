<template>
	<div>
		<!-- 这里是用动画来写 -->
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition name="hello" appear><!-- 加这个appear(相当于:appear="true") 是让它一上来就有进入的动画效果而不是点击了才有-->
			<h1 v-show="isShow">你好啊！</h1><!-- 因为是频繁修改所以我们用v-show不用v-if -->
		</transition>
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

	.hello-enter-active{/* 这个写法是规定的  进入的时候要激活的样式  但是hello可以改   原本是.v-enter-active这个是默认的  用的时候不用写name  如果改了就要写了*/
		animation: atguigu 0.5s linear;
	}

	.hello-leave-active{/* 离开时激活 */
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {/* 定义一个关键帧 从左边而来*/
		from{
			transform: translateX(-100%);/* 从哪里来 */
		}
		to{
			transform: translateX(0px);/* 来到 */
		}
	}
</style>