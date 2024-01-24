import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    label: 'foo',
  },
  getters: {
    getLabel: (state) => state.label,
  },
  mutations: {
    SET_LABEL(state, newLabel) {
      state.label = newLabel;
    },
  },
});
