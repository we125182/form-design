<template>
  <el-collapse v-model="activeCollapse" class="left-aside">
    <el-collapse-item
      v-for="componentPanel in componentPanelList"
      :key="componentPanel.name"
      :name="componentPanel.name"
      :title="componentPanel.title"
    >
      <component-panel :components="componentPanel.components"></component-panel>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import { componentPanelList } from '@/utils'
import ComponentPanel from './ComponentPanel'

export default {
  components: {
    ComponentPanel
  },
  data() {
    return {
      componentPanelList,
      activeCollapse: []
    }
  },
  created() {
    this.activeCollapse = this.componentPanelList.map(item => item.name)
  },
  methods: {
  }
}
</script>

<style lang="scss">
.left-aside {
  padding: 0 10px 10px;
  background-color: #fff;
  .el-button {
    width: 48%;
    margin-bottom: 10px;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
  .el-button:nth-child(odd) {
    margin-right: 10px;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
    & > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .el-collapse-item__header {
    font-size: 14px;
  }
}
</style>
