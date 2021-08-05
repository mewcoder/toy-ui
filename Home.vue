<template>
  <div>
    <z-button @click="dialogVisible = true">点击打开 Dialog</z-button>
    <z-dialog title="提示" :visible.sync="dialogVisible">
      <span>这是一段信息</span>
      <z-rate v-model="value"></z-rate>
      <span slot="footer" class="dialog-footer">
        <z-button @click="dialogVisible = false">取 消</z-button>
        <z-button type="primary" @click="dialogVisible = false">确 定</z-button>
      </span>
    </z-dialog>
    <z-button @click="open">打开消息提示</z-button>
    <!-- <z-message></z-message> -->
  </div>
</template>

<script>
import ZDialog from "../components/dialog/dialog.vue";
import ZButton from "../components/button/button.vue";
import ZRate from "../components/rate/rate.vue";
// import ZMessage from "../components/message/message.vue";
export default {
  components: { ZDialog, ZButton, ZRate },
  name: "Home",
  data() {
    return {
      dialogVisible: false,
      value: 3,
    };
  },
  methods: {
    open() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },
  },
};
</script>
