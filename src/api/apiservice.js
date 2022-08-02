import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
const Data = {
	users() {
		const url =  "https://jsonplaceholder.typicode.com";
		Vue.axios.get(`${url}/users`).then((response) => {
			console.log(response.data)
		})
	},
	photo(){
		const url =  "https://jsonplaceholder.typicode.com";
		return Vue.axios.get(`${url}/photos`);
	}
}
export default Data;