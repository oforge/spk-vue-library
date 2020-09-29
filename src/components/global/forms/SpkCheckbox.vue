<template>
  <div class="form__control" :class="state ? 'form__control--' + state : ''">
    <label :for="id" class="form__label">{{ label }}</label>
    <input
      :id="id"
      type="checkbox"
      class="form__input form__input--checkbox"
      :checked="value"
      v-bind="$attrs"
      @click="updateChecked"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { baseInputMixin } from '../../../mixins/baseInputMixin';
export default Vue.extend({
  name: 'SpkCheckbox',
  mixins: [baseInputMixin],
  methods: {
    updateChecked(event: InputEvent) {
      this.$emit('input', (event.target as HTMLInputElement).checked);
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
  &__input--checkbox {
    border: 1px solid map-get($greyTones, 'light');
    padding: 0 $controlGap;
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
