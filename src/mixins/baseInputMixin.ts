import Vue, { ComponentOptions } from 'vue';

export const baseInputMixin: ComponentOptions<Vue> = {
  inheritAttrs: false,
  props: {
    label: String,
    id: {
      type: String,
      required: true
    },
    value: [String, Number, Boolean],
    state: String
  },
  methods: {
    updateValue(event: InputEvent) {
      this.$emit('input', (event.target as HTMLInputElement).value);
    }
  }
};
