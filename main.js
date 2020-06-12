import Vue from 'vue'
import App from './App'
import Api from './api/index'
import myComponents from './components'

Vue.config.productionTip = false

App.mpType = 'app'
let api = new Api();
Vue.prototype.$api = api;
myComponents.registerComponent(Vue)
const app = new Vue({
    ...App
})
app.$mount()
