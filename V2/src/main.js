import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components";

import "@/assets/icon/icon.scss";

// import messageService from "./components/message/service.js";
// Vue.prototype.$message = messageService;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

components.map(({ install }) => {
  install(Vue);
});
