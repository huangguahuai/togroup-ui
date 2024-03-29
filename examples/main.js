import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TogroupUI from 'togroup-ui'
import 'togroup-ui/lib/togroupui.css'
Vue.config.productionTip = false
Vue.use(TogroupUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
