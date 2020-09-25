<template>
  <el-form class="form-container" v-bind="containerProp">
    <draggable
      tag="div"
      class="drag-container"
      :list="formItems"
      v-bind="{group:{ name:'people'}, ghostClass: 'target-ghost', handle: '.icon-move', animation: 200}"
      @add="handleAdd"
    >
      <transition-group name="fade" tag="div" class="transition-group">
        <render-component
          v-for="(component, index) in formItems"
          :key="component.prop"
          v-bind="component"
          :class="{'is-active': activeComponent.prop === component.prop}"
          @click="setActiveComponent(component)"
          @copy="handleCopy(component, index)"
          @delete="handleDelete(index)"
        >
        </render-component>
      </transition-group>
    </draggable>
  </el-form>
</template>

<script>
import draggable from 'vuedraggable'
import RenderComponent from '@/components/RenderComponent'
import { uniqueId } from 'lodash-es'
import { mapState } from 'vuex'
import { EventName } from '@/utils'

export default {
  components: {
    draggable,
    RenderComponent
  },
  props: {
    components: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      formItems: this.components || [],
      activeComponent: {}
    }
  },
  computed: {
    ...mapState(['containerProp'])
  },
  methods: {
    setActiveComponent(component) {
      this.activeComponent = component
      this.$event.$emit(EventName.activeComponent, this.activeComponent)
    },
    handleCopy(component, index) {
      const CopyComponent = Object.assign({}, component, { prop: uniqueId(component.name) })
      this.setActiveComponent(CopyComponent)
      this.formItems.splice(index, 0, CopyComponent)
    },
    handleAdd(e) {
      const index = e.newIndex
      this.setActiveComponent(this.formItems[index])
    },
    handleDelete(index) {
      const length = this.formItems.length
      if (length === 1) {
        this.setActiveComponent({})
      } else if (index === length - 1) {
        this.setActiveComponent(this.formItems[index - 1])
      } else {
        this.setActiveComponent(this.formItems[index + 1])
      }
      this.formItems.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.form-container {
  height: calc(100% - 50px);
  border: 1px dashed #cccccc;
  .drag-container {
    height: 100%;
  }
  .transition-group {
    position: relative;
    font-size: 0;
  }
  .transition-group:empty:after {
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    content: '从左侧拖拽组件到此处';
    color: #ccc;
    font-size: 14px;
    text-align: center;
  }
  .target-ghost {
    background: #F56C6C;
    border: 2px solid #F56C6C;
    outline-width: 0;
    height: 3px !important;
    box-sizing: border-box;
    font-size: 0;
    content: '';
    overflow: hidden;
    padding: 0;
    width: 100%;
    color: #F56C6C !important;
  }
}
</style>
