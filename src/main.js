// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import FastClick from 'fastclick';

import { TransferDom, XHeader, Loading } from 'vux';

Vue.component('x-header', XHeader);
Vue.component('loading', Loading);
Vue.directive('transfer-dom', TransferDom);

FastClick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
