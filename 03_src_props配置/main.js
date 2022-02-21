//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产者提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',//一定记得改哦，不是root是app
    render:h=>h(App)
})