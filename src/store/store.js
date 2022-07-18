import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	count: 0
}
const mutations = {
	increment() {
		// mutate state
		console.log(2224)
	}
}
export default new Vuex.Store({
	state,
	mutations
})