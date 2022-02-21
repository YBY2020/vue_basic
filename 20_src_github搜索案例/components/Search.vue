<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'Search',
		data() {
			return {
				keyWord:''
			}
		},
		methods: {
			searchUsers(){
				//请求前更新List的数据
				this.$bus.$emit('updateListData',{isLoading:true,errMsg:'',users:[],isFirst:false})
				axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(//这里用的是github提供的一个免费接口   同源问题后端工程师已经通过cors解决了
					response => {
						console.log('请求成功了')//search获取到的数据，list要用  这就涉及到组件间通信了
						//请求成功后更新List的数据
						this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})//触发updateListData事件  把数据丢过去
					},
					error => {
						//请求后更新List的数据
						this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
					}
				)
			}
		},
	}
</script>
