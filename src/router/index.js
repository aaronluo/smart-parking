import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import Home from '@/components/Home'
import Login from '@/components/Login';
import Me from '@/components/Me';
import store from '@/store'
import * as types from '@/store/types'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    }
  ],
  mode: 'history'
});

router.beforeEach(function (to, from, next) {
  let isUserLogged = store.getters['user/isLogged'];
  store.commit(`common/${types.TOGGLE_LOADING}`, {loading: true});

  if (!isUserLogged && !_.isEqual('/Login', to.path)) {
    let canAutoLogin = store.getters['user/canAutoLogin']
    if (canAutoLogin) {
      // trigger auto login, if auto login sucess, call next()
      // otherwise call next('/Login')
      // next('/Login');
    } else {
      next({replace: true, path: '/Login'});
    }
  }

  next();
});

router.afterEach(function (to) {
  store.commit(`common/${types.TOGGLE_LOADING}`, {loading: false});
});

export default router;
