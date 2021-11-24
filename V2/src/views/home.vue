<template>
  <div>
    <t-button @click="dialogVisible = true">点击打开 Dialog</t-button>
    <t-dialog title="提示" :visible.sync="dialogVisible">
      <span>这是一段信息</span>
      <t-rate v-model="value"></t-rate>
      <span slot="footer" class="dialog-footer">
        <t-button @click="dialogVisible = false">取 消</t-button>
        <t-button type="primary" @click="dialogVisible = false">确 定</t-button>
      </span>
    </t-dialog>
    <t-button @click="open">打开消息提示</t-button>
    <!-- <t-message></t-message> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      dialogVisible: false,
      value: 3
    };
  },
  methods: {
    open() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    }
  }
};
</script>
