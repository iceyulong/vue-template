import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setlist (state, data) {
      state.list = data
    }
  },
  actions: {
    getData ({ commit }) {
      axios
        .get('/api/getData', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            return res.data
          }
        })
        .then(res => {
          commit('setlist', Array.from(res))
        })
    }
  },
  modules: {}
})
