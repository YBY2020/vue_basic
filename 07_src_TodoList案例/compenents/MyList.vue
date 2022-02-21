<template>
    <ul class="todo-main">
        <MyItem 
          v-for="todoObj in todos" 
          :key="todoObj.id" 
          :todo="todoObj" 
          :checkTodo="checkTodo"
          :deleteTodu="deleteTodu"
        /><!-- 第一个todoObj是每一个要做事的对象，第三个todoObj是对象传进去(props) 如果方法过于长了可以这样回车缩进-->
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{MyItem},
    props:['todos','checkTodo','deleteTodu'],//他接收了checkTodo，但是他不用，给他儿子用
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>