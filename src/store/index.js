import Vue from 'vue';
import Vuex from 'vuex';
import common from '@/store/modules/common';
import user from '@/store/modules/user';

Vue.use(Vuex);
let debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    common,
    user
  },
  strict: debug
});
