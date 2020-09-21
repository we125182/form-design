export default {
  install(Vue) {
    Vue.prototype.$event = new Vue()
  }
}
