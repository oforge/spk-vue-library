<template>
  <div class="form__control" :class="state ? 'form__control--' + state : ''">
    <label :for="id" class="form__label">{{ label }}</label>
    <input :id="id" type="radio" class="form__input form__input--radio" v-bind="$attrs" @click="updateValue" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { baseInputMixin } from '../../../mixins/baseInputMixin';
export default Vue.extend({
  name: 'SpkRadio',
  mixins: [baseInputMixin],
  model: {
    prop: 'activeValue',
    event: 'onUpdateValue'
  },
  props: {
    activeValue: String
  },
  methods: {
    updateValue() {
      this.$emit('onUpdateValue', this.$props.value);
    }
  }
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
  &__input--radio {
    border: 1px solid map-get($greyTones, 'light');
    border-radius: map-get($radius, 'xxl');
    padding: 0;
    height: $formSize / 2;
    width: $formSize / 2;
    &:checked {
      background: map-get($colors, 'primary');
    }
    &:focus {
      border-color: map-get($greyTones, 'medium');
      box-shadow: 0 0 1px map-get($greyTones, 'light');
    }
  }
}
</style>
