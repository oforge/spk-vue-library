import Vue, {ComponentOptions, PluginObject, VueConstructor} from 'vue';
import spkModules from './store';

const spkVueLibrary: PluginObject<any> = {
  install(Vue:VueConstructor, options: ComponentOptions<Vue>) {
    Vue.component('spk-icon', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/SpkIcon.vue')
    );
    Vue.component('spk-button', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/forms/SpkButton.vue')
    );
    Vue.component('spk-text', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/forms/SpkText.vue')
    );
    Vue.component('spk-number', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/forms/SpkNumber.vue')
    );
    Vue.component('spk-checkbox', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/forms/SpkCheckbox.vue')
    );
    Vue.component('spk-radio', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/forms/SpkRadio.vue')
    );
    Vue.component('spk-modal', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/SpkModal.vue')
    );
    Vue.component('spk-notification', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/notification/SpkNotification.vue')
    );
    Vue.component('spk-sprite', () =>
      import(/* webpackChunkName: "globalComponents" */ './components/global/SpkSprite.vue')
    );
  }
};

export default { spkVueLibrary, spkModules };
