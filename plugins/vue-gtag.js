import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (context, inject) => {
  Vue.use(VueGtag, { config: { id: 'G-CSNG69WCY0' } }, context.app.router)
}
