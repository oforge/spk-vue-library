export enum deviceSizes {
  mobile,
  tablet,
  desktop
}

export enum deviceOrientations {
  portrait,
  landscape
}

export interface DeviceInterface {
  deviceSize: deviceSizes;
  deviceOrientation: deviceOrientations;
}
