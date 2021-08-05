<!--
    记录： type disabled loading size icon
-->

<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
      },
    ]"
  >
    <i :class="icon" v-if="icon && !loading"></i>
    <i class="el-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "TButton",
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
    buttonSize() {
      return this.size;
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" src="./button.scss"></style>
