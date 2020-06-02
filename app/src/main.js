import Vue from 'vue'
import App from './App.vue'
import { Button, Tabbar, TabbarItem,Icon,
        Search,Tab,Tabs,DropdownMenu,DropdownItem,
        Swipe,SwipeItem,Tag,CountDown  } from 'vant';
import router from './router'
import './mock/mockServer'
import store from './store'
import Head from './components/head/head.vue'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tag);
Vue.use(CountDown);

Vue.config.productionTip = false
Vue.component('Head', Head)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
