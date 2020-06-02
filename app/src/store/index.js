// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 声明使用Vuex
Vue.use(Vuex)
import {reqHome,reqCateModule,reqCateNavDatas,reqNavCateLists} from '../api'


const state = {
  home:{},
  cateModule:[],
  cateNavDatas:{},
  navCateLists:[]
}
const mutations = {
  RECEIVE_HOME(state,home){
    state.home=home
  },
  RECEIVE_CATEMODULE(state,cateModule){
    state.cateModule=cateModule
  },
  RECEIVE_CATENAVDATAS(state,cateNavDatas){
    state.cateNavDatas=cateNavDatas
  },
  RECEIVE_NAVCATELISTS(state,navCateLists){
    state.navCateLists=navCateLists
  }
}
const actions = {
  async getHome ({ commit }) {
    const result = await reqHome()
    if (result.code === 200) {
      commit('RECEIVE_HOME', result.data)
    }
  },
  async getCateModule ({ commit }) {
    const result = await reqCateModule()
    if (result.code === 200) {
      commit('RECEIVE_CATEMODULE', result.data)
    }
  },
  async getCateNavDatas ({ commit }) {
    const result = await reqCateNavDatas()
    if (result.code === 200) {
      commit('RECEIVE_CATENAVDATAS', result.data)
    }
  },
  async getNavCateLists ({ commit }) {
    const result = await reqNavCateLists()
    if (result.code === 200) {
      commit('RECEIVE_NAVCATELISTS', result.data)
    }
  }
}
const getters = {
}
export default new Vuex.Store({
  state, // 总的state
  mutations, // 总的mutations
  actions, // 总的actions
  getters
})

// 当前该文件还在引入state,mutations,actions,getters,何用,作何解释?

