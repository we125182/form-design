<template>
  <div class="right-aside">
    <el-tabs>
      <el-tab-pane label="字段属性">
        <component-prop></component-prop>
      </el-tab-pane>
      <el-tab-pane label="表单属性">
        <form-prop></form-prop>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import FormProp from './FormProp'
import ComponentProp from './ComponentProp'
export default {
  components: {
    FormProp,
    ComponentProp
  }
}
</script>

<style lang="scss">
.right-aside {
  width: 300px;
  border-left: 1px solid #ebeef5;
  overflow: auto;
  background-color: #fff;
  flex-shrink: 0;
  .el-tabs__nav {
    width: 100%;
  }
  .el-tabs__item {
    width: 50%;
    padding: 0;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .el-tab-pane {
    padding: 0 10px;
  }
}
</style>
