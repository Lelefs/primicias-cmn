import Vue from 'vue';
import store from '@/store';

function snackbar(val) {
  return store.commit('app/snackbar', val);
}

Vue.prototype.$snackbar = snackbar;
