<template>
	<div id="root">
  		<div class="todo-container">
    		<div class="todo-wrap">
      			<MyHeader :addTodo="addTodo"/>  <!-- 剪切走以后立马在这里补上Header标签，不然等后面再排就容易乱 给孩子传了一个函数-->
      			<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodu="deleteTodu"/>
      			<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/><!-- 把todos传给footer -->
    		</div>
  		</div>
	</div>
</template>

<script>
	import MyHeader from './compenents/MyHeader.vue'
	import MyList from './compenents/MyList.vue'
	//import MyItem from './compenents/MyItem.vue'  item是list的子组件，不用在这里引入
	import MyFooter from './compenents/MyFooter.vue'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
    data() {
      return {
        todos:[//一堆要做的事是数组，每个元素是一个对象，这句话理解一下
            {id:'001',title:'吃饭',done:true},
            {id:'002',title:'睡觉',done:false},
            {id:'003',title:'打豆豆',done:true}
         ]   
      }
    },
    methods: {
      //把一条数据加到todos数组里去
      addTodo(todoObj){
        //console.log('我是app组件，我收到了数据：',todoObj)
        this.todos.unshift(todoObj)//重点来了，unshift
      },
      //勾选或取消勾选一个todo
      checkTodo(id){
        this.todos.forEach((todo)=>{//来一次遍历，不遍历找不到这个id
          if(todo.id === id) todo.done = !todo.done//取反
        })
      },
      //删除一个todo
      deleteTodu(id){
        this.todos = this.todos.filter((todo)=>{//过滤掉不想要的就是一种删除 filter是不改变原数组的，返回一个过滤好的新的数组
          return todo.id !== id//返回已经过滤好的
          //每次都重新返回是不是效率变低呢，答案是不会，只要你id好好写，有diff算法在呢
        })
      },
      //全选or取消全选
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
      //清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return !todo.done
				})
			}
    },
	}
</script>

<style>
	/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
