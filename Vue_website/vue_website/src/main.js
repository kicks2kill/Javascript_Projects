import Vue from 'vue'
import App from './App.vue'
import {gsap} from 'gsap';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

gsap.from(".row", {duration: 2, x:100, opacity: 0, scale: .6, stagger: 0.8});
