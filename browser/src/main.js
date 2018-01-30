import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import '@/common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('@/common/images/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
