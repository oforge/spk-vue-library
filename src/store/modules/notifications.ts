import { Module } from 'vuex';
import { NotificationInterface, NotificationsInterface } from '../../interfaces/notification.interface';
import { RootStateInterface } from '../../interfaces/rootState.interface';

const notifications: NotificationInterface[] = [];
const notificationModule: Module<NotificationsInterface, RootStateInterface> = {
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
      notification.timeoutId = setTimeout(() => commit('REMOVE_NOTIFICATION', notification), notification.duration);
    },
    removeNotification({ commit }, notification: NotificationInterface) {
      commit('REMOVE_NOTIFICATION', notification);
    }
  }
};
export default notificationModule;
