<template>
  <div>
    <z-button @click="testClick">按钮</z-button>
    <z-button @click="testClick" size="small" disabled>按钮</z-button>
    <z-button @click="testClick" loading>按钮</z-button>
    <z-button @click="testClick" type="warning" icon="el-icon-edit"
      >按钮</z-button
    >
    <hr />
    <z-input
      style="width:240px"
      v-model="input"
      placeholder="请输入内容"
      disabled
    ></z-input>
    <z-input
      style="width:240px"
      v-model="input"
      placeholder="请输入内容"
      clearable
      prefix-icon="el-icon-search"
    ></z-input>
    <z-input
      style="width:240px"
      v-model="input"
      placeholder="请输入内容"
      show-password
    ></z-input>
    <span> {{ input }}</span>
    <hr />
  </div>
</template>
<script>
import ZButton from "../components/button/button.vue";
import ZInput from "../components/input/input.vue";
export default {
  name: "Test",
  components: {
    ZButton,
    ZInput,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    testClick() {
      window.alert("测试按钮");
    },
  },
};
</script>
<style>
hr {
  margin: 30px 0;
}
</style>
