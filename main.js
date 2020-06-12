import Vue from 'vue'
import App from './App'
import Api from './api/index'
import store from './stores'

Vue.config.productionTip = false

App.mpType = 'app'
let api = new Api();
Vue.prototype.$api = api;
const app = new Vue({
	store,
    ...App
})
app.$mount()
