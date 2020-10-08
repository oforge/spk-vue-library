import { Module } from 'vuex';
import { DeviceInterface } from '../../interfaces/device.interface';
import { RootStateInterface } from '../../interfaces/rootState.interface';
declare const deviceModule: Module<DeviceInterface, RootStateInterface>;
export default deviceModule;
