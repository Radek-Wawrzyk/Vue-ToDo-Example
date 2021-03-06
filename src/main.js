import Vue from 'vue';
import App from './App.vue';
import vueMoment from 'vue-moment';

Vue.use(vueMoment);

//Global styles
import './styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
