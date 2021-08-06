<template>
  <div>
    <section>
      <h2>input</h2>
      <div>
        基础
        <t-input
          v-model="input"
          style="width : 300px"
          readonly
          placeholder="请输入内容"
        ></t-input>
      </div>
      <div>
        禁用
        <t-input
          v-model="input"
          disabled
          style="width:300px"
          placeholder="请输入内容"
        ></t-input>
      </div>
      <div>
        可清空
        <t-input
          placeholder="请输入内容"
          style="width:300px"
          v-model="input"
          clearable
        >
          >
        </t-input>
      </div>
      <div>
        密码
        <t-input
          v-model="input"
          style="width:300px"
          placeholder="请输入内容"
          show-password
        ></t-input>
      </div>
      <div class="demo-input-suffix">
        属性方式：
        <t-input
          placeholder="请选择日期"
          suffix-icon="t-icon-date"
          style="width:300px"
          v-model="input"
        ></t-input>
        <t-input
          placeholder="请输入内容"
          prefix-icon="t-icon-search"
          style="width:300px"
          v-model="input"
        ></t-input>
      </div>
      <div class="demo-input-suffix">
        slot 方式：
        <t-input placeholder="请选择日期" style="width:300px" v-model="input">
          <i slot="suffix" class="t-input__icon t-icon-date"></i>
        </t-input>
        <t-input placeholder="请输入内容" style="width:300px" v-model="input">
          <i slot="prefix" class="t-input__icon t-icon-search"></i>
        </t-input>
      </div>
      <div class="demo-input-size">
        尺寸
        <t-input
          size="large"
          placeholder="请输入内容"
          suffix-icon="t-icon-date"
          style="width:300px"
          v-model="input"
        ></t-input>
        <t-input
          size="medium"
          placeholder="请输入内容"
          suffix-icon="t-icon-date"
          style="width:300px"
          v-model="input"
        ></t-input>
        <t-input
          size="small"
          placeholder="请输入内容"
          suffix-icon="t-icon-date"
          style="width:300px"
          v-model="input"
        ></t-input>
        <t-input
          size="mini"
          placeholder="请输入内容"
          suffix-icon="t-icon-date"
          style="width:300px"
          v-model="input"
        ></t-input>
      </div>
    </section>
    <section>
      <h2>textarea</h2>
      <t-input
        type="textarea"
        style="width:300px"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
      ></t-input>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      textarea: ''
    };
  }
};
</script>
<style lang="scss" scoped>
div {
  margin: 20px;
}
section {
  border-bottom: 0.5px solid rgb(200, 200, 200);
}
</style>
