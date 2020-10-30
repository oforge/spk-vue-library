<!--
  This is a sample form component. Here we have a base button. The components should be as dumb as possible.
  Here we simply use the button with a slot so that every parent component can alter it easily.
-->
<template>
  <button class="btn" :disabled="loading" :class="loading ? 'is-loading' : ''">
    <spk-loader :class="darkLoader ? 'spk-loader--dark' : ''"></spk-loader>
    <span class="flex flex--a-center" :class="loading ? 'is-invisible' : ''"><slot><span>Submit</span></slot></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SpkButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    darkLoader: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  appearance: none;
  border: 1px solid transparent;
  padding: map-get($sizes, 's') map-get($sizes, 'm');

  background: map-get($greyTones, 'light');
  color: map-get($fontColors, 'light');
  cursor: pointer;
  &:hover,
  &:active {
    background: darken(map-get($greyTones, 'light'), 5%);
  }
  &:active {
    border: 1px solid lighten(map-get($greyTones, 'light'), 5%);
  }

  &--inline {
    display: inline-flex;
  }

  &--primary {
    background: map-get($colors, 'primary');
    &:hover,
    &:active {
      background: darken(map-get($colors, 'primary'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($colors, 'primary'), 30%);
    }
  }

  &--secondary {
    background: map-get($colors, 'secondary');
    &:hover,
    &:active {
      background: darken(map-get($colors, 'secondary'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($colors, 'secondary'), 5%);
    }
  }

  &--error {
    background: map-get($stateColors, 'error');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'error'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'error'), 20%);
    }
  }

  &--warning {
    background: map-get($stateColors, 'warning');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'warning'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'warning'), 5%);
    }
  }

  &--info {
    background: map-get($stateColors, 'info');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'info'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'info'), 20%);
    }
  }

  &--success {
    background: map-get($stateColors, 'success');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'success'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'success'), 5%);
    }
  }

  &--ghost {
    background: transparent;
    &:hover,
    &:active {
      background: transparent;
    }
    &:active {
      border: 1px solid transparent;
    }
  }

  .icon + span,
  span + .icon {
    margin-left: map-get($sizes, s);
  }
  span {
    color: currentColor;
  }
}

.btn-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .btn {
    margin-right: map-get($sizes, 'xs');

    &:last-child {
      margin-left: 0;
    }
  }
}
</style>
