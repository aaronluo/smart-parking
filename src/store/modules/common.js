// import _ from 'lodash';
import * as types from '../types';

const state = {
  loading: false
};

const mutations = {
  [types.TOGGLE_LOADING] (state, payload) {
    state.loading = payload.loading;
  }
};

const actions = {

};

const getters = {

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
