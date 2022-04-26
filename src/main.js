import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import '@fortawesome/fontawesome-free/css/all.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './utils/commons'
import './utils/requestHandler'

Vue.use(Buefy)
Vue.use(VueAxios, axios); 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
