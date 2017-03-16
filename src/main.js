// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'weui/dist/style/weui.min.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
window.Swiper = Swiper
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

// router.push('register?ticket=0|MttnL6AZdLD6ej328xMokKRlIy4IBl8fCQ/B9RoepYI=&n=123');
// router.push('infoPatch');
// router.push('info');
// router.push('infoEdit');
// router.push('index');
// router.push('myInfo');
// router.push('condition');
// router.push('infoView');
// router.push('conditionView');
