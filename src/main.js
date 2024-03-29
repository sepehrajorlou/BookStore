import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import './assets/style/style.css'
// ///////////////////////////////////////

import {i18n} from './plugins/i18n'
// ///////////////////////////////////////
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
// ///////////////////////////////////////

import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniFacebook, uniTwitter, uniInstagram  , uniShoppingBag , uniBookmarkFull , uniDollarAlt , uniSearch , uniUser , uniCheck} from 'vue-unicons/dist/icons'
Unicon.add([uniFacebook, uniTwitter, uniInstagram , uniShoppingBag , uniBookmarkFull , uniDollarAlt , uniSearch , uniUser , uniCheck])
Vue.use(Unicon);
// ///////////////////////////////////////
import store from './store/store'
// ///////////////////////////////////////
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
import 'leaflet/dist/leaflet.css';
// ///////////////////////////////////////

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
