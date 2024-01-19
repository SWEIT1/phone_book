<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },

  focusable: {
    type: Boolean,
    default: false
  },

  label: {
    type: String
  },

  type: {
    type: String,
    default: 'text'
  },

  placeholder: {
    type: String,
    default: ''
  },

  errorMessage: {
    type: [ String || null],
    default: null
  }
})


const emit = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emit);

</script>

<template>
  <div class="Input">
    <label v-if="label">{{ label }}</label>
    <input
        :type="type"
        :placeholder="placeholder"
        @input="value = $event.target.value"
    >
    <span>{{ errorMessage }}</span>
  </div>
</template>

<style scoped lang="scss">
.Input {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;

  label {
    font-size: 16px;
    color: var(--blue);
    font-weight: 400;
    line-height: 24px;
  }

  input {
    padding: 12px;
    border: 1px solid var(--grey);
    color: var(--dark-grey);
    font-weight: 300;
    height: 45px;
    min-height: 45px;
    font-size: 16px;
  }

  span {
    color: #dc3232;
    font-size: 1em;
    font-weight: normal;
    display: block;
  }
}
</style>
