import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EventBus from '@/plugins/event'
import '@/styles/index.scss'
import RadioGroup from '@/components/RadioGroup'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.use(EventBus)
Vue.component(RadioGroup.name, RadioGroup)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
