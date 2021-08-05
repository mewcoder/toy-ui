<template>
  <div>
    <h3>数据校验表单组件——Form</h3>
    <z-form ref="form" :model="formValidate" :rules="ruleValidate">
      <z-form-item label="用户名" prop="name">
        <z-input v-model="formValidate.name"></z-input>
      </z-form-item>
      <z-form-item label="邮箱" prop="mail">
        <z-input v-model="formValidate.mail"></z-input>
      </z-form-item>
    </z-form>
    <z-button @click="handleSubmit">提交</z-button>
    <z-button @click="handleReset">重置</z-button>

    <div>
      <z-switch v-model="formValidate.switch"></z-switch
      >{{ formValidate.switch }}
    </div>
    <div>
      <z-radio-group v-model="radio">
        <z-radio label="1">备选项1</z-radio>
        <z-radio label="2">备选项2</z-radio>
      </z-radio-group>
      radio:{{ radio }}
    </div>
    <div>
      <z-checkbox-group v-model="checkList">
        <z-checkbox label="复选框 A"></z-checkbox>
        <z-checkbox label="复选框 B"></z-checkbox>
        <z-checkbox label="复选框 C"></z-checkbox>
        <z-checkbox label="禁用" disabled></z-checkbox>
        <z-checkbox label="选中且禁用" disabled></z-checkbox>
      </z-checkbox-group>
      checkbox:{{ checkList }}
    </div>
  </div>
</template>
<script>
import ZForm from "../V2/src/components/form/form.vue";
import ZFormItem from "../V2/src/components/form/form-item.vue";
import ZInput from "../V2/src/components/input/input.vue";
import ZButton from "./V2/src/components/button/button.vue";
import ZSwitch from "../V2/src/components/switch/switch.vue";
import ZRadio from "../V2/src/components/radio/radio.vue";
import ZRadioGroup from "../V2/src/components/radio/radio-group.vue";
import ZCheckbox from "../V2/src/components/checkbox/checkbox.vue";
import ZCheckboxGroup from "../V2/src/components/checkbox/checkbox-group.vue";
export default {
  components: {
    ZForm,
    ZFormItem,
    ZInput,
    ZButton,
    ZSwitch,
    ZRadio,
    ZRadioGroup,
    ZCheckbox,
    ZCheckboxGroup,
  },
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      radio: "1",
      formValidate: {
        name: "",
        mail: "",
        switch: false,
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("表单校验失败");
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
