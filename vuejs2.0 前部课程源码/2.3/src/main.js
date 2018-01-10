// ! 本demo 基于 vue1.0 模板
import Vue from 'vue'

// 相关概念
// 指令v-html，指令修改器v-on:keydown.enter 演示
let myHeaderChild = {
	template: '<p v-html="content" v-on:keydown.enter="onKeyEnter"></p>',
	data () {
		return {
			content: 'i am header child'
		}
	},
	methods: {
		onKeyEnter () {
			console.log('on key enter down')
		}
	}
}


// 内置组件component的使用
let myHeader = {
	template: '<p>this is header, my child : <component :is="currentCom"></component></p>',
	components: {
		'my-header-child': myHeaderChild
	},
	data () {
		return {
			currentCom: 'my-header-child'	
		}
		
	}
}
let app = new Vue({
	el: '#app',// 对象挂载点
	components: {
		'my-header': myHeader
	}
})

// 实例的内置方法 演示
console.log(app.$data)
app.$on('emit', function () {

})