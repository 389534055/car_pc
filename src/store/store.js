import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    //数据库
    state: {
      show:false,
      show1:false,
      show2:false,
    },
    //修改数据
    mutations:{
      u(state){
        state.show=!state.show;
      },
      u1(state){
        state.show1=!state.show1;
      },
      u2(state){
        state.show2=!state.show2;
      },
      
    },
})