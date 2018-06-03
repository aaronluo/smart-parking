<template>
  <div id="app">
    <loading :show="loading"></loading>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      loading: state => state.common.loading
    })
  }
}
</script>

<style lang="less">
@import './assets/less/main.less';
body {
  background-color: #fbf9fe;
}
</style>
