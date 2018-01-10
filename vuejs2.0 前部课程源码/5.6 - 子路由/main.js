import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Dog from './components/dog'
import Cat from './components/cat'
import comA from './components/a'
Vue.use(VueRouter)

let routes = [
	{
		name: 'dog',
		path: '/dog/:color',
		component: Dog,
		children: [
			{
				name: 'dogcoma',
				path: 'dogcoma',
				component: comA
			}
		]
	},
	{
		name: 'cat',
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