<template>
  <div class="notification-item">
    <spk-button
      class="notification__close-button button btn--ghost"
      :class="notification.state ? 'color--light' : 'color--dark'"
      @click.native="closeNotification()"
    >
      <spk-icon iconClass="icon--cross" iconName="cross" />
    </spk-button>
    <div
      v-if="notification.title !== ''"
      class="notification__header p-l-s p-r-xxl"
      :class="notification.state ? 'bg--' + notification.state : ''"
    >
      <h3 :class="notification.state ? 'color--light' : ''">
        {{ notification.title }}
      </h3>
    </div>
    <p class="notification__body p-s" :class="notification.state ? 'bg--' + notification.state : ''">
      {{ notification.message }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NotificationInterface } from '../../../interfaces/notification.interface';

let notification!: NotificationInterface;
export default Vue.extend({
  name: 'NotificationItem',
  data() {
    return {
      notification
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeNotification() {
      this.$store.dispatch('notificationModule/removeNotification', this.notification);
    }
  },
  created() {
    this.notification = this.data;
  },
  beforeDestroy() {
    clearTimeout(this.notification.timeoutId);
  }
});
</script>

<style lang="scss">
</style>
