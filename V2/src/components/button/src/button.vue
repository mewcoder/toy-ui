<template>
  <button
    class="t-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :class="[
      type ? 't-button--' + type : '',
      buttonSize ? 't-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="t-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'TButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    size: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
    buttonSize() {
      return this.size;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss" src="./button.scss"></style>

/* 说明
原生button：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button */
