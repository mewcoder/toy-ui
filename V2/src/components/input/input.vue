<!--
    记录： 实现input 双向绑定  前后图标
-->
<template>
  <div
    :class="[
      type === 'textarea' ? 'el-textarea' : 'el-input',
      inputSize ? 'el-input--' + inputSize : '',
      {
        'is-disabled': inputDisabled,
        'el-input--prefix': $slots.prefix || prefixIcon,
        'el-input--suffix':
          $slots.suffix || suffixIcon || clearable || showPassword,
      },
    ]"
  >
    <input
      v-if="type === 'input'"
      class="el-input__inner"
      ref="input"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :value="value"
      @input="handleInput"
      @blur="handleBlur"
    />
    <!-- 前置内容 -->
    <span class="el-input__prefix" v-if="$slots.prefix || prefixIcon">
      <slot name="prefix"></slot>
      <i class="el-input__icon" v-if="prefixIcon" :class="prefixIcon"> </i>
    </span>
    <!-- 后置内容 -->
    <span class="el-input__suffix" v-if="getSuffixVisible">
      <span class="el-input__suffix-inner">
        <template v-if="!showClear || !showPwdVisible">
          <slot name="suffix"></slot>
          <i class="el-input__icon" v-if="suffixIcon" :class="suffixIcon"> </i>
        </template>
        <i
          v-if="showClear"
          class="el-input__icon el-icon-circle-close el-input__clear"
          @click="clear"
        ></i>
        <i
          v-if="showPwdVisible"
          class="el-input__icon el-icon-view el-input__clear"
          @click="handlePasswordVisible"
        ></i>
      </span>
    </span>
  </div>
</template>

<script>
import emitter from "@/mixins/emitter.js";
export default {
  name: "ZInput",
  inheritAttrs: false,
  mixins: [emitter],
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "input",
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    suffixIcon: {
      type: String,
      default: "",
    },
    prefixIcon: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      passwordVisible: false,
    };
  },
  computed: {
    inputDisabled() {
      return this.disabled;
    },
    inputSize() {
      return this.size;
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
    showClear() {
      return this.clearable && !this.inputDisabled && this.nativeInputValue;
    },
    showPwdVisible() {
      return this.showPassword && !this.inputDisabled && this.nativeInputValue;
    },
  },
  methods: {
    getSuffixVisible() {
      return (
        this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword
      );
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
      this.dispatch("ZFormItem", "on-form-change", e.target.value);
    },
    handleBlur(e) {
    
      this.dispatch("ZFormItem", "on-form-blur", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style></style>
