const ctx = require.context("@/views/", false, /\.vue$/);

// 正则处理 ./button.vue ==> button
const routeList = ctx.keys().map((item) => {
  return item.match(/\.\/(\S*)\.vue$/)[1];
});

export default routeList;
