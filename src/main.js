// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'


import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
import '../static/css/common.less';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
