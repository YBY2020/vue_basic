<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{myAge+1}}</h2><!-- 这里必须传回一个数字类型的myAge不能是字符串形式的，不然1就直接加后面了 -->
		<button @click="updateAge">尝试修改收到的年龄</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			console.log(this)
			return {
				msg:'我是一个尚硅谷的学生',//在这里写死的数据不管谁去调用都改不了
				myAge:this.age//硬要改age的话
			}
		},
		methods: {
			updateAge(){
				this.myAge++
			}
		},
		//【简单声明接收】 声明的时候不要瞎声明 就是没定义的也往里面放 接收到的props是不允许改的（在app里接收的）
		// props:['name','age','sex'] 

		//【接收的同时对数据进行类型限制】
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//【接收的同时对数据：进行类型限制+默认值的指定+必要性的限制】（一般很少写这个超级完整的）
		props:{//相当于确认收款了 prop property 属性
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			age:{
				type:Number,
				default:99 //默认值  age可传可不传，不传我就用默认值99 required和default一般不同时使用，因为没有意义
			},
			sex:{
				type:String,
				required:true//必须要传
			}
		}
	}
</script>