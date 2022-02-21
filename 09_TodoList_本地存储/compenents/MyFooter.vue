<template>
	<div class="todo-footer" v-show="total"><!-- v-show="total"如果total是0就不展示 -->
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name:'MyFooter',
		props:['todos','checkAllTodo','clearAllTodo','clearAllTodo'],
		computed: {
			//总数
			total(){
				return this.todos.length
			},
			//已完成数
			doneTotal(){
				//此处使用reduce方法做条件统计 这里不太明白
				/* const x = this.todos.reduce((pre,current)=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)
				},0) */
				//简写
				return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
			},
			//控制全选框
			isAll:{
				//全选框是否勾选
				get(){
					return this.doneTotal === this.total && this.total > 0  //这里用了计算属性total 说明计算属性是允许套娃的 this.total > 0如果啥都没有也不应该钩
				},
				//isAll被修改时set被调用
				set(value){//value是一个布尔值
					this.checkAllTodo(value)
				}
			}
		},
		methods: {
			/* checkAll(e){
				this.checkAllTodo(e.target.checked)
			} */
			//清空所有已完成
			
			clearAll(){
				if(confirm('确定删除吗？')){
				this.clearAllTodo()
				}
			}
		},
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>