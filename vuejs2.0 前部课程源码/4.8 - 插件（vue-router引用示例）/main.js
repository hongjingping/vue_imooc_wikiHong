import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
Vue.use(VueRouter)

let routes = [
	{
		path: '/apple',
		component: Apple
	},
	{
		path: '/banana',
		component: Banana
	}
]

let router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router,
	el: '#app',
	render: function(h) {
		return h(App)
	}
})