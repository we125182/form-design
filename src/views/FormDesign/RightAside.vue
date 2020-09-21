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
  width: 270px;
  box-shadow: -5px 0px 5px -5px black;
  .el-tabs__nav {
    width: 100%;
  }
  .el-tabs__item {
    width: 50%;
    padding: 0;
    text-align: center;
  }
  .el-tab-pane {
    padding: 0 10px;
  }
}
</style>
