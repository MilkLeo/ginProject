// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import GIN from '@/components/GIN'
import VueRouter from "vue-router"

import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false


new Vue({
  components: {GIN},
  el: '#gin',
  router,
  template: '<GIN/>'
})
