import { PluginObject } from 'vue';
import { NotificationsInterface, NotificationInterface, DeviceInterface, deviceOrientations, deviceSizes } from './interfaces';
import deviceMixin from './mixins/deviceMixin';
import spkModules from './store';
declare const spkVueLibrary: PluginObject<any>;
export { spkVueLibrary, spkModules, DeviceInterface, NotificationInterface, NotificationsInterface, deviceSizes, deviceOrientations, deviceMixin };
