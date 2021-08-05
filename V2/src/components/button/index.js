import TButton from "./src/button";

TButton.install = function (Vue) {
  Vue.component(TButton.name, TButton);
};

export default TButton;
