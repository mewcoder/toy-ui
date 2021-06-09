<!--
    记录： 实现 true false
-->

<template>
  <div
    class="el-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    @click="handleClick"
  >
    <input class="el-switch__input" type="checkbox" ref="input" />
    <span class="el-switch__core" ref="core"> </span>
  </div>
</template>

<script>
export default {
  name: "ZSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked() {
      return this.value;
    },
    switchDisabled() {
      return this.disabled;
    },
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      this.$refs.input.checked = !this.value;
    },
  },
  mounted() {
    this.$refs.input.checked = this.value;
  },
};
</script>

<style></style>
