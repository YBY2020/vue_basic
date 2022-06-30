<template>
	<div class="row">
		<!-- 展示用户列表 这里很有参考价值    把有用的信息都通过数据绑定传进来  那个key也是用户的唯一标识login   不懂可以听老师的课-->
		<div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
			<a :href="user.html_url" target="_blank">
				<img :src="user.avatar_url" style='width: 100px'/>
			</a>
			<p class="card-text">{{user.login}}</p>
		</div>
		<!-- 展示欢迎词   LIST有四种展示界面   展示哪个靠v-show里面的值的true还是false-->
		<h1 v-show="info.isFirst">欢迎使用！</h1>
		<!-- 展示加载中 -->
		<h1 v-show="info.isLoading">加载中....</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.errMsg">{{info.errMsg}}</h1>
	</div>
</template>

<script>
	export default {
		name:'List',
		data() {
			return {
				info:{//这些值又要靠search里面的数据去修改  又是一个兄弟间通信
					isFirst:true,//一上来是true   就是一上来展示欢迎词
					isLoading:false,
					errMsg:'',
					users:[]
				}
			}
		},
		mounted() {
			this.$bus.$on('updateListData',(dataObj)=>{//把丢过来的数据作为参数接收
				this.info = {...this.info,...dataObj}//这里是一个ES6的语法   把两个对象摊开进行比对  不一样的就按后面那个为主
			})
		},
	}
</script>

<style scoped>
	.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>