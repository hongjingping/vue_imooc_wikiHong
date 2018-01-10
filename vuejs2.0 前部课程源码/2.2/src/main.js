// ! 本demo 基于 vue1.0 模板
import Vue from 'vue'
// demo1 - 实例化对象
// new Vue({
// 	el: '#app',// 对象挂载点
// 	template: '<p>hello {{ who }}</p>',
// 	data: {
// 		who: 'world'
// 	}
// })

// demo2 - 全局注册组件
// Vue.component('my-header', {
// 	template: '<p>this is header</p>'
// })
// new Vue({
// 	el: '#app',// 对象挂载点
// 	data: {
// 		who: 'world'
// 	}
// })

// demo3 - 子组件引用
let myHeaderChild = {
	template: '<p>i am my {{ name }}</p>',
	// 组件需要用方法返回data
	data () {
		return {
			name: 'header child'
		}
	}
}
let myHeader = {
	template: '<p>this is header, my child : <my-header-child></my-header-child></p>',
	components: {
		'my-header-child': myHeaderChild
	}
}
new Vue({
	el: '#app',// 对象挂载点
	components: {
		'my-header': myHeader
	}
})