<template>
  <transition-group
    name="slide"
    tag="div"
    class="notification-wrapper"
    :class="getSize(size) + ' ' + getPosition(position)"
  >
    <spk-notification-item
      class="notification shadow--s"
      v-for="notification in notifications"
      :key="notification.id"
      :data="notification"
    >
    </spk-notification-item>
  </transition-group>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import NotificationItem from './SpkNotificationItem.vue';

const { mapState } = createNamespacedHelpers('notificationModule');

export default Vue.extend({
  name: 'SpkNotification',
  components: {
    'spk-notification-item': NotificationItem
  },
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
  z-index: z('notification');
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
