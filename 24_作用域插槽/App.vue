<template>
	<div class="container">
		<!-- 【数据在卡槽的那个组件里  而数据生成的结构由卡槽的使用者来决定】 -->
		<Category title="游戏">
			<template scope="atguigu"><!-- 必须要包裹一个template标签才能收到卡槽的数据  scope没有p   atguigu可以随便取名，他接收到的是一个对象  我们要用的就是对象里的games-->
				<ul>
					<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<template scope="{games}"><!-- 这里也是ES6的语法  对象的解构赋值   let {games} = {games: ['红色警戒','穿越火线','劲舞团','超级玛丽'],...........}; -->
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="{games}"><!-- 也可以写slot-scope   这三种写法作用都是一样的 -->
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>

	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
