import notificationModule from './modules/notifications';
import { ModuleTree } from 'vuex';
import { RootStateInterface } from '../interfaces/rootState.interface';
import deviceModule from './modules/device';

const spkModules: ModuleTree<RootStateInterface> = {
  notificationModule,
  deviceModule
};

export default spkModules;