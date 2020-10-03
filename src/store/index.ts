import Vue from 'vue';
import Vuex from 'vuex';
import notificationModule from './modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notificationModule
  }
});
