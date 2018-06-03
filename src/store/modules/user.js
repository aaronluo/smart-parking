import * as types from '../types';
import _ from 'lodash';
import moment from 'moment';
import api from '@/api/mock/index.js';

const state = {
  profile: {
    username: '',
    contact: {
      phone: '',
      email: ''
    }
  },
  tokenInfo: {
    accessToken: '',
    refreshToken: '',
    expireDate: null
  },
  roles: {},
  groups: {}
};

const mutations = {
  [types.UPDATE_USER_PROFILE] (state, data) {
    state.profile = data.profile;
    state.tokenInfo = data.tokenInfo;
    state.tokenInfo.expireDate = moment(data.tokenInfo.expireDate)
  }
};

const actions = {
  login ({commit}, payload) {
    return new Promise((resolve, reject) => {
      api.login(payload.username, payload.password).then(res => {
        commit(`${types.UPDATE_USER_PROFILE}`, res);
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
};

const getters = {
  isLogged (state) {
    return !_.isEmpty(state.tokenInfo.accessToken) &&
      !_.isEmpty(state.tokenInfo.refreshToken) &&
      !_.isEmpty(state.profile.username) &&
      !_.isNull(state.tokenInfo.expireDate) &&
      (state.tokenInfo.expireDate > moment());
  },
  canAutoLogin (state) {
    return !_.isEmpty(state.profile.username) &&
      !_.isEmpty(state.tokenInfo.refreshToken);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
