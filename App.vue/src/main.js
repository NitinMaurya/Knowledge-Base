import Vue from 'vue'
import axios from 'axios'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './routes.js'
Vue.use(VueResource);
Vue.use(VueRouter);
window.axios = axios;
window.Vue=Vue;
window.axios.defaults.headers.common={
    'X-Requested-With' : 'XMLHttpRequest'
};

new Vue({
    el: '#app',
    router
});