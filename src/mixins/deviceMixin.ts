import Vue from 'vue';
export default Vue.mixin(new Vue({
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.setDeviceWidth);
      this.setDeviceWidth();
    });
  },
  methods: {
    setDeviceWidth() {
      this.$store.dispatch('deviceModule/setDeviunresceSize', document.documentElement.clientWidth);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setDeviceWidth);
  }
}));
