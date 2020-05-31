import Vue from 'vue'
import App from './App.vue'
import { Button, Tabbar, TabbarItem,Icon,Search  } from 'vant';
import router from './router'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Search);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
