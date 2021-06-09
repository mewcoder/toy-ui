<!--
    记录： 实现 true false
-->

<template>
  <label
    class="el-checkbox"
  >
    <span
      class="el-checkbox__input"
      :class="[{ 'is-disabled': disabled }, { 'is-checked': isChecked }]"
    >
      <span class="el-checkbox__inner"></span>
      <input
        class="el-checkbox__original"
        type="checkbox"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="el-checkbox__label">
      <slot></slot>
      <!-- 如果没有传内容，我们就把label当成内容 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "ZCheckbox",
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        console.log(value)
        // 触发父组件给当前组件注册的input事件
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.CheckboxGroup;
    },
    isChecked() {
      // 如果是group包裹，判断 label是否在model中
      // 如果没有group包裹，直接使用model
      // console.warn("model:" + this.model);
      // console.warn("label:" + this.label);
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
};
</script>

<style></style>
