<template>
  <div
    class="el-form-item"
    :class="[
      {
        'is-required': isRequired,
      },
    ]"
  >
    <label v-if="label" class="el-form-item__label">{{ label }}</label>
    <div class="el-form-item__content">
      <slot></slot>
      <div v-if="validateState === 'error'" class="el-form-item__error">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import emitter from "@/mixins/emitter.js";

export default {
  name: "ZFormItem",
  mixins: [emitter],
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      validateState: "",
      validateMessage: "",
    };
  },
  computed: {
    isRequired() {
      let rules = this.getRules();
      let isRequired = false;

      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired = true;
          }
        });
      }
      return isRequired;
    },
    // 从 Form 的 model 中动态得到当前表单组件的数据
    fieldValue() {
      return this.form.model[this.prop];
    },
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        this.$on("on-form-blur", this.onFieldBlur);
        this.$on("on-form-change", this.onFieldChange);
      }
    },
    // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules || []);
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    },
    // 重置数据
    resetField() {
      this.validateState = "";
      this.validateMessage = "";

      this.form.model[this.prop] = this.initialValue;
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        (rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger);

      if (!rules || rules.length === 0) {
        return true;
      }

      // 设置状态为校验中
      this.validateState = "validating";

      // 以下为 async-validator 库的调用方法
      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      let model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, (errors) => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";

        callback(this.validateMessage);
      });
    },
  },
  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch("ZForm", "on-form-item-add", this);
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue;

      this.setRules();
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch("ZForm", "on-form-item-remove", this);
  },
};
</script>
