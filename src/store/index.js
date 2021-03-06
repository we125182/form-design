import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    containerProp: {
      modelName: 'form',
      inline: false,
      labelPosition: 'right',
      labelWidth: '100px',
      size: 'small'
    },
    formItems: []
  },
  mutations: {
    setContainerProp(state, prop) {
      state.containerProp = prop
    },
    setFormItems(state, formItems) {
      state.formItems = formItems
    }
  },
  actions: {
  },
  modules: {
  }
})
