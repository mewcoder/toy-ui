<template>
  <transition name="el-message">
    <div
      :class="['el-message', type ? `el-message--${type}` : '']"
      :style="positionStyle"
      v-show="visible"
    >
      <i :class="typeClass"></i>
      <slot
        ><p class="el-message__content">{{ message }}</p>
      </slot>
      <i
        v-if="showClose"
        class="el-message__closeBtn el-icon-close"
        @click="close"
      ></i>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
};
export default {
  data() {
    return {
      visible: true,
      message: "这是一条消息提示",
      type: "info",
      verticalOffset: 20,
      duration: 3000,
      showClose: false,
      closed: false,
    };
  },
  computed: {
    typeClass() {
      return this.type ? `el-message__icon el-icon-${typeMap[this.type]}` : ``;
    },
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`,
      };
    },
  },
  methods: {
    close() {
      this.closed = true;
      this.visible = false;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style></style>
