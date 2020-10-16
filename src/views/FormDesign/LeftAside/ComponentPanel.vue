<template>
    <draggable
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
      return Object.assign(copyComponent, { prop: uniqueId(copyComponent.name) })
    }
  }
}
</script>

<style scoped lang="scss">
.el-button {
  cursor: move;
}
</style>
