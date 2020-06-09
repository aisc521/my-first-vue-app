import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)




const state = {}

const mutations = {}

var storage={

    set(key,value){

        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key){

        return JSON.parse(localStorage.getItem(key));
    },remove(key){
        localStorage.removeItem(key);
    }

}
export default new Vuex.Store({
  state,
  mutations,
  storage
})
