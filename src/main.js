// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview';
import utils from './libs/utils'
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(utils);

Vue.config.productionTip = false;

Vue.prototype.axios= axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
