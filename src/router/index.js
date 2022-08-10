import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const Home = () => import('@/views/home');
const ErrorPage = () => import('@/views/404');

const routes = [
  {
    path: '',
    component: Home,
    meta: {
      title: 'Início',
    },
  },

  {
    path: '*',
    component: ErrorPage,
    meta: {
      title: '404',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? `${to.meta.title} | FSEM` : 'FSEM';
  });
});

store.$router = router;

export default router;
