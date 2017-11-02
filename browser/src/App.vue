<template>
  <div id="app">
    <h1>
      pc App
    </h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  margin-top 60px
  h1
    font-size 40px
    margin 20px 0
</style>
