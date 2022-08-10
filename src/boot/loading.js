import Vue from 'vue';
import store from '@/store';

function loading() {
  return store.state.app.spinner;
}

function setLoading(boolean) {
  store.commit('app/spinner', boolean);
}

function toggleLoading() {
  store.commit('app/spinner', !store.state.app.spinner);
}

Vue.prototype.$loading = loading;
Vue.prototype.$setLoading = setLoading;
Vue.prototype.$toggleLoading = toggleLoading;
