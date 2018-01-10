// ! 本demo 基于 vue1.0 模板
import Vue from 'vue'
import App from './App'

// demo1
// new Vue({
// 	el: '#app',// 对象挂载点
// 	template: '<div>{{ fruit }}</div>',
// 	data: {
// 		fruit: 'apple'
// 	}
// })

//demo2 - 代码的实例化对象 - 项目渲染
new Vue({
	el: '#app',// 对象挂载点
	components: { App }
})