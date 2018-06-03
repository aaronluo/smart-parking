import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import store from '@/store'
import * as types from '@/store/types'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});

router.beforeEach(function (to, from, next) {
  store.commit(`common/${types.TOGGLE_LOADING}`, {loading: true});
  next();
});

router.afterEach(function (to) {
  store.commit(`common/${types.TOGGLE_LOADING}`, {loading: false});
});

export default router;
