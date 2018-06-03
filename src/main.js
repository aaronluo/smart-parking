// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import FastClick from 'fastclick';

import { TransferDom, XHeader, Loading, Group, XInput, XButton, AlertPlugin } from 'vux';

Vue.component('x-header', XHeader);
Vue.component('loading', Loading);
Vue.component('group', Group);
Vue.component('x-input', XInput);
Vue.component('x-button', XButton);
Vue.directive('transfer-dom', TransferDom);
Vue.use(AlertPlugin)
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
