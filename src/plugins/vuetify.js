import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import store from '@/store';

Vue.use(Vuetify);

const options = {
  theme: {
    options: {
      customProperties: false,
    },
  },
};

const vuetify = new Vuetify(options);

store.$vuetify = vuetify.framework;

export default vuetify;
