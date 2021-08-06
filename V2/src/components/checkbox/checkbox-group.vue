<template>
  <div class="el-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZCheckboxGroup',
  provide() {
    return {
      CheckboxGroup: this
    };
  },
  props: {
    // hm-radio-group接收到了 value值
    // 将来还需要触发 当前组件的input事件
    // provide 与  inject  provider/consumer
    value: {
      type: Array
    }
  }
};
</script>
