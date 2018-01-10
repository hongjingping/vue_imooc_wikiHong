import Vue from 'vue'
import App from './App'
import store from './store/index'

console.log(store)
new Vue({
	store,
	el: '#app',
	render: function(h) {
		return h(App)
	}
})