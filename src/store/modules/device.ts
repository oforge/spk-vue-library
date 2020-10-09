import { Module } from 'vuex';
import { deviceSizes, deviceOrientations } from '../../interfaces/device.enum';
import { DeviceInterface } from '../../interfaces/device.interface';
import { RootStateInterface } from '../../interfaces/rootState.interface';

const deviceModule: Module<DeviceInterface, RootStateInterface> = {
  namespaced: true,
  state: {
    deviceSize: deviceSizes.mobile,
    deviceOrientation: deviceOrientations.portrait
  },
  getters: {
    getDeviceOrientation(state: DeviceInterface) {
      return state.deviceOrientation;
    },
    getDeviceSize(state: DeviceInterface) {
      return deviceSizes[state.deviceSize];
    },
    isMobile(state: DeviceInterface) {
      return state.deviceSize === deviceSizes.mobile;
    },
    isTablet(state: DeviceInterface) {
      return state.deviceSize === deviceSizes.tablet;
    },
    isDesktop(state: DeviceInterface) {
      return state.deviceSize === deviceSizes.desktop;
    }
  },
  mutations: {
    SET_DEVICE_SIZE(state: DeviceInterface, deviceSize: deviceSizes) {
      state.deviceSize = deviceSize;
    }
  },
  actions: {
    setDeviceSize({ state, commit }, deviceWidth: number) {
      const sizes = {
        xxs: 480,
        xs: 560,
        s: 640,
        m: 768,
        l: 960,
        xl: 1024,
        xxl: 1216
      };

      if (deviceWidth < sizes.s) {
        if (state.deviceSize !== deviceSizes.mobile) {
          commit('SET_DEVICE_SIZE', deviceSizes.mobile);
        }
      } else if (deviceWidth >= sizes.s && deviceWidth < sizes.xl) {
        if (state.deviceSize !== deviceSizes.tablet) {
          commit('SET_DEVICE_SIZE', deviceSizes.tablet);
        }
      } else {
        if (state.deviceSize !== deviceSizes.desktop) {
          commit('SET_DEVICE_SIZE', deviceSizes.desktop);
        }
      }
    }
  }
};

export default deviceModule;
