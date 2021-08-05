<template>
  <div>
    <section>
      <h2>基础用法</h2>
      <div>
        <t-button>默认按钮</t-button>
        <t-button type="primary">主要按钮</t-button>
        <t-button type="success">成功按钮</t-button>
        <t-button type="info">信息按钮</t-button>
        <t-button type="warning">警告按钮</t-button>
        <t-button type="danger">危险按钮</t-button>
      </div>
      <div>
        <t-button plain>朴素按钮</t-button>
        <t-button type="primary" plain>主要按钮</t-button>
        <t-button type="success" plain>成功按钮</t-button>
        <t-button type="info" plain>信息按钮</t-button>
        <t-button type="warning" plain>警告按钮</t-button>
        <t-button type="danger" plain>危险按钮</t-button>
      </div>
      <div>
        <t-button round>圆角按钮</t-button>
        <t-button type="primary" round>主要按钮</t-button>
        <t-button type="success" round>成功按钮</t-button>
        <t-button type="info" round>信息按钮</t-button>
        <t-button type="warning" round>警告按钮</t-button>
        <t-button type="danger" round>危险按钮</t-button>
      </div>
      <div>
        <t-button icon="t-icon-search" circle></t-button>
        <t-button type="primary" icon="t-icon-edit" circle></t-button>
        <t-button type="success" icon="t-icon-check" circle></t-button>
        <t-button type="info" icon="t-icon-message" circle></t-button>
        <t-button type="warning" icon="t-icon-star-off" circle></t-button>
        <t-button type="danger" icon="t-icon-delete" circle></t-button>
      </div>
    </section>
    <section>
      <h2>图标按钮</h2>
      <div>
        <t-button type="primary" icon="t-icon-edit"></t-button>
        <t-button type="primary" icon="t-icon-share"></t-button>
        <t-button type="primary" icon="t-icon-delete"></t-button>
        <t-button type="primary" icon="t-icon-search">搜索</t-button>
        <t-button type="primary">
          上传
          <i class="t-icon-upload t-icon--right"></i>
        </t-button>
      </div>
    </section>
    <section>
      <h2>文字按钮</h2>
      <div><t-button type="text">文字按钮</t-button></div>
    </section>
    <section>
      <h2>加载中</h2>
      <div><t-button type="primary" :loading="true">加载中</t-button></div>
    </section>
    <section>
      <h2>不同尺寸</h2>
      <div>
        <t-button type="primary">默认按钮</t-button>
        <t-button type="primary" size="medium">中等按钮</t-button>
        <t-button type="primary" size="small">小型按钮</t-button>
        <t-button type="primary" size="mini">超小按钮</t-button>
      </div>
    </section>
    <section>
      <h2>按钮组</h2>
      <div>
        <t-button-group>
          <t-button>一月</t-button>
          <t-button>二月</t-button>
          <t-button>三月</t-button>
        </t-button-group>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    btnClick() {
      console.alert('测试按钮');
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  margin: 20px;
}
section {
  border-bottom: 0.5px solid rgb(200, 200, 200);
}
</style>
