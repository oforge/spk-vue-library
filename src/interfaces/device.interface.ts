import { deviceSizes, deviceOrientations } from './device.enum';

export interface SimpleDeviceSizeInterface {
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface DeviceInterface {
  simpleDeviceSize: string;
  deviceSize: deviceSizes;
  deviceOrientation: deviceOrientations;
}

