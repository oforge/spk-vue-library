<template>
  <transition-group
    name="slide"
    tag="div"
    class="notification-wrapper"
    :class="getSize(size) + ' ' + getPosition(position)"
  >
    <div class="notification shadow--s" v-for="(notification, index) in notifications" :key="'e' + index">
      <spk-button
        class="notification__close-button button btn--ghost"
        :class="notification.state ? 'color--light' : 'color--dark'"
        @click.native="closeNotification(notification)"
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
  </transition-group>
</template>

<script lang="ts">
import Vue from 'vue';
import { NotificationInterface } from '../../interfaces/notification.interface';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('notificationModule');

export default Vue.extend({
  name: 'SpkNotification',
  computed: {
    ...mapState(['notifications'])
  },
  props: {
    state: String,
    size: {
      type: String,
      default: 's'
    },
    position: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    closeNotification(notification: NotificationInterface) {
      this.$store.dispatch('notificationModule/removeNotification', notification);
    },
    getSize(notificationSize: string): string {
      if (notificationSize === 'm') {
        return 'notification-wrapper--size-m';
      }
      if (notificationSize === 'l') {
        return 'notification-wrapper--size-l';
      }
      return 'notification-wrapper--size-s';
    },
    getPosition(position: string): string {
      if (position === 'left') {
        return 'notification-wrapper--from-left';
      }
      return 'notification-wrapper--from-right';
    }
  }
});
</script>

<style lang="scss">
.notification-wrapper {
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  right: 0;
  bottom: 0;
  width: 320px;
  padding: map-get($sizes, s);
  z-index: z('toast');
  pointer-events: none;
}
.notification {
  position: relative;
  flex: 0 1 100%;
  width: 100%;
  background: map-get($colors, 'light');
  pointer-events: auto;

  &--size-m {
    width: 50vw;
  }
  &--size-l {
    width: 95vw;
  }
  &__close-button {
    position: absolute;
    right: 0;
    top: 4px;
  }
  &__header {
    margin-top: 0;
  }
  &__body {
    max-height: 56vh;
    overflow-y: auto;
  }
}
.notification + .notification {
  margin-top: map-get($sizes, 's');
}

.slide-enter {
  transform: translateY(100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease-in;
}
.slide-leave-to {
  transform: translateX(100%);
}
.slide-move {
  transition: transform 0.2s ease-in;
}
</style>
