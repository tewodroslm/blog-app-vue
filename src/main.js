import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import { store } from './store';

/* Bootstrap CSS */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/* jQuery */
import JQuery from 'jquery'
window.$ = JQuery

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
