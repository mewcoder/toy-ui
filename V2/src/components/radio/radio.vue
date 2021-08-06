<!--
    记录： 实现 true false
-->

<template>
  <label class="el-radio" :class="{ 'is-checked': model === label }">
    <span
      class="el-radio__input"
      :class="{
        'is-checked': model === label
      }"
    >
      <span class="el-radio__inner"></span>
      <input
        class="el-radio__original"
        type="radio"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <!-- 如果没有传内容，我们就把label当成内容 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ZRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: null
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件给当前组件注册的input事件
        this.isGroup
          ? this.RadioGroup.$emit('input', value)
          : this.$emit('input', value);
      }
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup;
    }
  }
};
</script>

<style></style>
