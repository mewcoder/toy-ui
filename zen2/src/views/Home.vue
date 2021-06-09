<template>
  <div>
    <z-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</z-button
    >
    <z-dialog title="提示" :visible.sync="dialogVisible">
      <span>这是一段信息</span>
      <z-rate v-model="value"></z-rate>
      <span slot="footer" class="dialog-footer">
        <z-button @click="dialogVisible = false">取 消</z-button>
        <z-button type="primary" @click="dialogVisible = false">确 定</z-button>
      </span>
    </z-dialog>
  </div>
</template>

<script>
import ZDialog from "../components/dialog/dialog.vue";
import ZButton from "../components/button/button.vue";
import ZRate from "../components/rate/rate.vue";
export default {
  components: { ZDialog, ZButton, ZRate },
  name: "Home",
  data() {
    return {
      dialogVisible: false,
      value: 3,
    };
  },
};
</script>
