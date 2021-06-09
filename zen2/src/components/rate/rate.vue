<template>
  <div class="el-rate">
    <span
      v-for="(item, key) in max"
      :key="key"
      class="el-rate__item"
      @mousemove="setCurrentValue(item)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <i
        class="el-rate__icon"
        :class="'el-icon-star-' + (currentValue >= item ? 'on' : 'off')"
        style="color: #F7BA2A"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ZRate",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    setCurrentValue(val) {
      this.currentValue = val;
    },
    resetCurrentValue() {
      this.currentValue = this.value;
    },
    selectValue(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style></style>
