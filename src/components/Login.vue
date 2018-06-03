<template>
  <div>
    <group style="margin-top:100px">
      <x-input v-model="username" placeholder="用户名" type="text" placeholder-align="left" text-align="left" :show-clear="false">
        <x-icon slot="label" type="ios-contact" size="32"></x-icon>
      </x-input>
      <x-input v-model="password" placeholder="密码" :type="passInputType" placeholder-align="left" text-align="left" :show-clear="false">
        <x-icon slot="label" type="ios-keypad" size="32"></x-icon>
        <x-icon slot="right" type="ios-eye" size="32" @click.native="toggleShowPass()"></x-icon>
      </x-input>
      <x-button class="login_btn" type="default" text="提交" @click.native="doLogin()"></x-button>
    </group>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      showPass: false,
      fromRoute: null
    }
  },
  computed: {
    passInputType () {
      return this.showPass ? 'text' : 'password';
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    doLogin () {
      let payload = {username: this.username, password: this.password};
      let _this = this;
      this.login(payload).then(res => {
        // redirect to the page before going to Login page
        _this.$router.push({
          path: _this.fromRoute.path,
          params: _this.fromRoute.params,
          query: _this.fromRoute.query});
      }).catch(err => {
        this.$vux.alert.show({content: err.message});
      });
    },
    toggleShowPass () {
      this.showPass = !this.showPass;
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(from)
    console.log(to)
    next(vm => {
      vm.fromRoute = from
    });
  }
}
</script>
<style lang="less" scoped>
svg {
  margin-left: 70px;
  margin-right: 20px;
}
.login_btn {
  margin: auto;
  width: 80%;
}
</style>
