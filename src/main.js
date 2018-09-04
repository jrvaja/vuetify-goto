import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import 'vuetify/dist/vuetify.min.css'
import VuseScrollbar from './directives/PerfectScrollbar'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  directives: {
    VuseScrollbar
  }
})
