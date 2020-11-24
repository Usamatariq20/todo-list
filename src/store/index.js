import Vue from 'vue';
import Vuex from 'vuex';

import todolist from '@/store/todolist';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { },

  mutations: { },

  actions: { },

  modules: {
    todolist,
  }
});
