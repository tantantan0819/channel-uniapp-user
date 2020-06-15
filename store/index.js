import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({//全局变量定义
    state: {
      isLogin: false
    },
    mutations: {
        login(state, data) {
           state.isLogin = data
        },
        logout(state) {
           state.isLogin = false;
        }
    }
})
export default store