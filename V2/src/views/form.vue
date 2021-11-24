<template>
  <div>
    <h3>数据校验表单组件——Form</h3>
    <t-form ref="form" :model="formValidate" :rules="ruleValidate">
      <t-form-item label="用户名" prop="name">
        <t-input v-model="formValidate.name"></t-input>
      </t-form-item>
      <t-form-item label="邮箱" prop="mail">
        <t-input v-model="formValidate.mail"></t-input>
      </t-form-item>
    </t-form>
    <t-button @click="handleSubmit">提交</t-button>
    <t-button @click="handleReset">重置</t-button>

    <div>
      <t-switch v-model="formValidate.switch"></t-switch>
      {{ formValidate.switch }}
    </div>
    <div>
      <t-radio-group v-model="radio">
        <t-radio label="1">备选项1</t-radio>
        <t-radio label="2">备选项2</t-radio>
      </t-radio-group>
      radio:{{ radio }}
    </div>
    <div>
      <t-checkbox-group v-model="checkList">
        <t-checkbox label="复选框 A"></t-checkbox>
        <t-checkbox label="复选框 B"></t-checkbox>
        <t-checkbox label="复选框 C"></t-checkbox>
        <t-checkbox label="禁用" disabled></t-checkbox>
        <t-checkbox label="选中且禁用" disabled></t-checkbox>
      </t-checkbox-group>
      checkbox:{{ checkList }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      radio: '1',
      formValidate: {
        name: '',
        mail: '',
        switch: false
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功');
        } else {
          window.alert('表单校验失败');
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
