<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/nav-bar'
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
