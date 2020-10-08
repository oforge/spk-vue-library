export declare enum deviceSizes {
    mobile = 0,
    tablet = 1,
    desktop = 2
}
export declare enum deviceOrientations {
    portrait = 0,
    landscape = 1
}
export interface DeviceInterface {
    deviceSize: deviceSizes;
    deviceOrientation: deviceOrientations;
}
