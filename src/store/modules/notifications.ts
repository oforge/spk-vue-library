import { Module } from 'vuex';
import { NotificationInterface } from '../../interfaces/notification.interface';

const notifications: NotificationInterface[] = [];
let timeoutHandler: number | undefined = 0;
const notificationModule: Module<any, any> = {
  namespaced: true,
  state: {
    notifications
  },
  mutations: {
    ADD_NOTIFICATION(state, notification: NotificationInterface) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, notification: NotificationInterface) {
      const i = state.notifications.indexOf(notification);
      state.notifications.splice(i, 1);
    }
  },
  actions: {
    addNotification({ commit }, notification: NotificationInterface) {
      if (!notification.duration) {
        notification.duration = 4000;
      }
      commit('ADD_NOTIFICATION', notification);
      timeoutHandler = setTimeout(() => commit('REMOVE_NOTIFICATION', notification), notification.duration);
    },
    removeNotification({ commit }, notification: NotificationInterface) {
      clearTimeout(timeoutHandler);
      commit('REMOVE_NOTIFICATION', notification);
    }
  }
};
export default notificationModule;
