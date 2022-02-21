<template>
    <li >
        <label><!-- <label> 标签为 input 元素定义标注（标记）。 -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/><!-- :checked初始化显示勾没勾 change事件是原生js，当input表单value发生改变触发事件-->
            <!-- 但不建议v-modle的写法，违反了原则 props是只读的，不可以做修改 -->
            <!-- <input type="checkbox" v-model="todo.done"/> --><!-- 把初始化勾没勾和后续勾没勾混在一起写，v-modle如果绑定的是一个布尔值，可以直接影响到checked的勾没勾 同时因为是双向绑定，且v-model默认绑定checked，勾没勾也直接影响done-->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="HandleDelete(todo.id)">删除</button><!-- 点击删除按钮要删除的话首先就是要拿到按钮对应那行的id -->
    </li>
</template>

<script>
export default {
    name:'MyItem',
    //声明接受todo对象
    props:['todo','checkTodo','deleteTodu'],
    methods: {
      handleCheck(id){
        //通知App组件将对应的todo对象的done值取反
        //数据在哪，方法在哪，所以应该要去app里增删改查
        this.checkTodo(id)
    },
    HandleDelete(id){
        if(confirm('确定删除吗？')){//弹出一个确认框，confirm是根据用户的交互来决定布尔值的真假
          //通知app删除对应的对象
          this.deleteTodu(id)
        }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{/* hover 鼠标悬停的时候某一项高亮（背景色变灰） */
  background-color: #ddd;
}

li:hover button{/* 鼠标悬停的时候删除按钮就显示 */
  /* display是设置元素显示的方式,block是以块状元素的方式显示（如果不是“块”block，那么只有点到文字上时才会触发） 只要不是none就都能显示 不是true跟false那种*/
  display:block/* bolck是此元素将显示为块级元素 v-show也可以，但是能用css就用css */
}

</style>