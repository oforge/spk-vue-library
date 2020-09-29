<template>
  <div class="form__control" :class="state ? 'form__control--' + state : ''">
    <label :for="id" class="form__label">{{ label }}</label>
    <slot name="iconBefore"></slot>
    <input
      :id="id"
      type="number"
      class="form__input form__input--number"
      :class="{
        'form__input--has-icon-before': !!$slots['iconBefore'],
        'form__input--has-icon-after': !!$slots['iconAfter']
      }"
      v-bind="$attrs"
      @input="updateValue"
    />
    <slot name="iconAfter"></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { baseInputMixin } from '../../../mixins/baseInputMixin';
export default Vue.extend({
  name: 'SpkNumber',
  mixins: [baseInputMixin]
});
</script>

<style lang="scss">
$iconSize: $formSize / 2.5;
$controlGap: map-get($sizes, 's');
.form {
  &__control {
    position: relative;
    display: block;
    &--success {
      .icon {
        color: map-get($stateColors, 'success');
      }
      .form__input,
      .form__input:focus {
        border-color: map-get($stateColors, 'success');
      }
      .form__input:focus {
        box-shadow: 0 0 1px map-get($stateColors, 'success');
      }
    }
    &--error {
      .icon {
        color: map-get($stateColors, 'error');
      }
      .form__input,
      .form__input:focus {
        border-color: map-get($stateColors, 'error');
      }
      .form__input:focus {
        box-shadow: 0 0 1px map-get($stateColors, 'error');
      }
    }
  }
  &__label {
    margin-bottom: map-get($sizes, 's');
    display: block;
    cursor: pointer;
  }
  &__input {
    border: 1px solid map-get($greyTones, 'light');
    padding: 0 $controlGap;
    height: $formSize;
    &--has-icon-before {
      padding-left: $controlGap * 2 + $iconSize;
    }
    &--has-icon-after {
      padding-right: $controlGap * 2 + $iconSize;
    }
    width: 100%;
    &:focus {
      border-color: map-get($greyTones, 'medium');
      box-shadow: 0 0 1px map-get($greyTones, 'light');
    }
  }
}
.form__control .icon {
  position: absolute;
  width: $iconSize;
  height: $iconSize;
  bottom: $formSize / 2;
  pointer-events: none;
  margin-bottom: ($iconSize / 2 * -1);
}
.form__label + .icon {
  left: map-get($sizes, 's');
}
.form__input + .icon {
  right: map-get($sizes, 's');
}
</style>
