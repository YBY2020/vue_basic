<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 作用域插槽也可以有name   但是默认插槽能弄明白的事就不必起名字了 -->
		<slot :games="games" msg="hello">我是默认的一些内容</slot><!-- 谁往卡槽里插入结构  ，games数据就传给谁   又一个子传父的方式   而父那边必须包裹一个template标签才能收到数据 -->
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title'],
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			}
		},
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>