import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Dog from './components/dog'
import Cat from './components/cat'
Vue.use(VueRouter)

let routes = [
	{
		path: '/dog',
		component: Dog
	},
	{
		path: '/cat',
		component: Cat
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