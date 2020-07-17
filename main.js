import Vue from 'vue'
import App from './App'
import store from './store'
import api from './plugins/http';
import validate from './plugins/validate';
import myComponents from './components'
Vue.config.productionTip = false

//挂载接口请求方法
Vue.prototype.$get = api.get;
Vue.prototype.$post = api.post;
App.mpType = 'app'
myComponents.registerComponent(Vue)
const app = new Vue({
	store,
	validate,
    ...App
})
app.$mount()
