import Vue from 'vue';
import './style.scss';

import store from './store'

import App from './assets/components/App.vue';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment }})

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
