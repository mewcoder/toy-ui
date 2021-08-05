<template>
  <div>
    <t-button @click="btnClick">按钮</t-button>
    <t-button @click="btnClick" size="small" disabled>按钮</t-button>
    <t-button @click="btnClick" loading>按钮</t-button>
    <t-button @click="btnClick" type="primary" icon="el-icon-edit"
      >按钮</t-button
    >
  </div>
</template>
<script>
export default {
  methods: {
    btnClick() {
      console.alert("测试按钮");
    },
  },
};
</script>
