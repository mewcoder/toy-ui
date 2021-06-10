import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

import "@/assets/theme/index.css";

import messageService from "./components/message/service.js";
Vue.prototype.$message = messageService;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
