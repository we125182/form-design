<template>
  <draggable
    class="left-aside"
    tag="div"
    :list="components"
    :group="{ name:'people', pull:'clone', put:false}"
    :sort="false"
    :clone="handleClone"
    ghost-class="ghost"
  >
    <el-button plain v-for="component in components" :key="component.name">{{ component.label }}</el-button>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { uniqueId, cloneDeep } from 'lodash-es'

export default {
  components: {
    draggable
  },
  props: {
    components: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClone(component) {
      const copyComponent = cloneDeep(component)
      const { label, name, props } = copyComponent
      return {
        name,
        prop: uniqueId(name),
        label,
        props
      }
    }
  }
}
</script>

<style lang="scss">
.left-aside {
  .el-button {
    width: 120px;
    margin-top: 10px;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
  .el-button:nth-child(odd) {
    margin-right: 10px;
  }
}
</style>
