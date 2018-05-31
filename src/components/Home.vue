<template>
  <div>
    <x-header title="Home" :left-options='{showBack:false}' :right-options="{showMore: false}">
      <x-icon slot="right" type="ios-contact" size="32" @click.native="popUserPane()"></x-icon>
    </x-header>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    popUserPane () {
      console.log('click me...')
    }
  }
}
</script>
<style lang="less" scoped>
svg {
  fill: white;
  margin-top: -0.5em;
  margin-right: -0.3em;
}
</style>
