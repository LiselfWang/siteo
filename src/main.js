import Vue from 'vue/dist/vue.js';
import router from './route/index';
import Router from 'vue-router';
Vue.use(Router);
import Element from 'element-ui';
import './element-variables.scss';
Vue.use(Element);

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
