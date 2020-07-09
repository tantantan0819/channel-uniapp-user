import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({//全局变量定义
    state: {
      isLogin: false,
	  token: '',
    },
    mutations: {
        SET_LOGIN:(state, data)=>{
           state.isLogin = data
        },
		SET_LOGOUT:(state, data)=>{
           state.isLogin = data
        },
		SET_TOKEN:(state, data)=>{
			state.token = data;
		}
    }
})
export default store