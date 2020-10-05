import { Module } from 'vuex';
import { NotificationInterface } from '../../interfaces/notification.interface';
declare const notificationModule: Module<
  {
    notifications: NotificationInterface[];
  },
  NotificationInterface
>;
export default notificationModule;
