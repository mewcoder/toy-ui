const ctx = require.context('./', true, /.index.js$/);
const components = [];
ctx.keys().map(item => {
  if (item === './index.js') {
    return;
  }
  components.push(ctx(item).default);
});
export default components;
