import { Module } from 'vuex';
import { NotificationInterface } from '../../interfaces/notification.interface';

const notifications: NotificationInterface[] = [];
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
    addNotification({ commit, dispatch }, notification: NotificationInterface) {
      if (!notification.duration) {
        notification.duration = 4000;
      }
      commit('ADD_NOTIFICATION', notification);
      setTimeout(() => commit('REMOVE_NOTIFICATION', notification), notification.duration);
    }
  }
};
export default notificationModule;
