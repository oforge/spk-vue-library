import { Module } from 'vuex';
import { NotificationsInterface } from '../../interfaces/notification.interface';
import { RootStateInterface } from '../../interfaces/rootState.interface';
declare const notificationModule: Module<NotificationsInterface, RootStateInterface>;
export default notificationModule;
