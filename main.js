import Vue from 'vue'
import App from './App'
import Api from './api/index'
import store from './stores'
import myComponents from './components'
Vue.config.productionTip = false

App.mpType = 'app'
let api = new Api();
Vue.prototype.$api = api;
myComponents.registerComponent(Vue)
const app = new Vue({
	store,
    ...App
})
app.$mount()
