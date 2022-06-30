export const hunhe = {
	methods: {
		showName(){
			alert(this.name)
		}
	},
	mounted() {
		console.log('你好啊！')
	},
}
export const hunhe2 = {
	data() {
		return {
			x:100,
			y:200
		}
	},
}
//所谓的混入（混合）就是两个组件共享一个配置
//原则：组件里有了的方法、数据发生冲突就以组件为主，组件里没有的就以混入为主，而生命周期是都要，但是组件里的在后