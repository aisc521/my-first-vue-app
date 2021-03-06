import Vue from 'vue'
import App from './App'

import router from './store/index.js';


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
   el: '#app',
  router,
  render: h => h(App)
})
app.$mount()
