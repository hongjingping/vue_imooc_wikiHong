import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  count: 0,
  updateTime: new Date().getTime()
}

// getters
const getters = {
  getNum: state => state.count,
  getTime: state => state.updateTime
}

// actions
const actions = {
  add ({ commit, state }) {
  	// add 返回 promise对象
  	return new Promise((resolve, reject) => {
      setTimeout(() => {
      	let newCount = state.count + 1
        commit('updateNumber', newCount)
      	commit('updateTimeStr', new Date().getTime())
        resolve()
      }, 1000)
    })
  },
  minus ({ commit, state }) {
    setTimeout(() => {
      let newCount = state.count - 1
      commit('updateNumber', newCount)
      commit('updateTimeStr', new Date().getTime())
    }, 1000)
  }
}

// mutations
const mutations = {
  updateNumber (state, payload) {
    state.count = payload
  },
  updateTimeStr (state, payload) {
    state.updateTime = payload
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})