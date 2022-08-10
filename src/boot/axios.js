/* eslint-disable camelcase */
import Vue from 'vue';
import Axios from 'axios';
import store from '../store/index';
import getEnv from '../utils/env';

const BASE_URL = getEnv('VUE_APP_API_URL');

const axios = Axios.create({
  baseURL: BASE_URL,
});

Vue.prototype.$axios = axios;
store.$axios = axios;

export const baseUrl = BASE_URL;
export default axios;
