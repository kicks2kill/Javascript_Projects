import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import '@/assets/tailwind.css'
import Home from '@/components/Home';
import Login from '@/components/Login';
import store from '../store';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/Login', component: Login},
  { path: '/Home', component: Home}
]


const router = new VueRouter({
  routes
});

router.push()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
