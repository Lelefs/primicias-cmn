import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

import './boot/axios';
import './boot/loading';
import './boot/snackbar';
import './boot/vmask';
import './boot/vuelidate';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
