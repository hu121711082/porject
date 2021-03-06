import Vue from 'vue'
import App from './App.vue'
import router from './router'

// reset css 
import './assets/css/reset.css'

// ViewUI引用
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';



Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
