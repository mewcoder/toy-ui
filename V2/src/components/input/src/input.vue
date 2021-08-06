<template>
  <div
    :class="[
      type === 'textarea' ? 't-textarea' : 't-input',
      inputSize ? 't-input--' + size : '',
      {
        'is-disabled': disabled,
        't-input--prefix': $slots.prefix || prefixIcon,
        't-input--suffix':
          $slots.suffix || suffixIcon || clearable || showPassword
      }
    ]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <template v-if="type !== 'textarea'">
      <input
        v-if="type === 'text'"
        class="t-input__inner"
        ref="input"
        v-bind="$attrs"
        :disabled="disabled"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :readonly="readonly"
        :value="value"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <!-- 前置内容 -->
      <span class="t-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="t-input__icon" v-if="prefixIcon" :class="prefixIcon"></i>
      </span>
      <!-- 后置内容 -->
      <span
        class="t-input__suffix"
        v-if="
          this.$slots.suffix ||
            this.suffixIcon ||
            this.showClear ||
            this.showPassword
        "
      >
        <span class="t-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible">
            <slot name="suffix"></slot>
            <i class="t-input__icon" v-if="suffixIcon" :class="suffixIcon"></i>
          </template>
          <!-- 清空图标 -->
          <i
            v-if="showClear"
            class="t-input__icon t-icon-circle-close t-input__clear"
            @click="handleClear"
          ></i>
          <!-- 密码图标 -->
          <i
            v-if="showPwdVisible"
            class="t-input__icon t-icon-view t-input__clear"
            :class="{ 't-input__clear__is-active': passwordVisible }"
            @click="handlePasswordVisible"
          ></i>
        </span>
      </span>
    </template>
    <textarea
      v-else
      class="t-textarea__inner"
      ref="textarea"
      v-bind="$attrs"
      :disabled="disabled"
      :readonly="readonly"
      :style="textareaStyle"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></textarea>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter.js';
export default {
  name: 'TInput',
  inheritAttrs: false, //  v-bind="$attrs",
  mixins: [emitter],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    showPassword: Boolean,
    suffixIcon: String,
    prefixIcon: String,
    readonly: Boolean
  },

  data() {
    return {
      passwordVisible: false,
      isHover: false, // 用于clear图标显示
      isFocus: false,
      isComposing: false // 判断组合输出，比如中文拼音输入时 https://github.com/ElemeFE/element/issues/10516
    };
  },
  computed: {
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ''
        : String(this.value);
    },
    showClear() {
      return (
        this.clearable &&
        !this.disabled &&
        this.nativeInputValue &&
        (this.isFocus || this.isHover)
      );
    },
    showPwdVisible() {
      return this.showPassword && !this.disabled && this.nativeInputValue;
    }
  },
  methods: {
    focus() {
      this.getInput().focus();
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    handleClear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.$nextTick(() => {
        this.focus(); // 聚焦到当前输入框
      });
    },
    handleFocus(e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },
    handleChange(e) {
      this.$emit('change', e.target.value);
    },
    handleInput(e) {
      this.$emit('input', e.target.value);
      //  this.dispatch('ZFormItem', 'on-form-change', e.target.value);
    },
    handleBlur(e) {
      this.$emit('blur', e);
      this.isFocus = false;

      // this.dispatch('ZFormItem', 'on-form-blur', e.target.value);
    },
    handleCompositionStart() {
      this.isComposing = true;
    },

    handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    }
  }
};
</script>

<style lang="scss" src="./input.scss"></style>
