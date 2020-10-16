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
        <drag-form-item
          v-for="(component, index) in formItems"
          :key="component.prop"
          :class="{'drag-form-item': true, 'is-active': activeComponent.prop === component.prop}"
          @click="setActiveComponent(component)"
          @copy="handleCopy(component, index)"
          @delete="handleDelete(index)"
        >
          <render-component v-bind="component"></render-component>
        </drag-form-item>
      </transition-group>
    </draggable>
  </el-form>
</template>

<script>
import draggable from 'vuedraggable'
import DragFormItem from '@/components/DragFormItem'
import RenderComponent from '@/components/RenderComponent'
import { uniqueId } from 'lodash-es'
import { mapState } from 'vuex'
import { EventName } from '@/utils'

export default {
  components: {
    draggable,
    RenderComponent,
    DragFormItem
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
    ...mapState(['containerProp']),
    formatComponents() {
      return this.formItems.map(item => {
        if (item.name === 'ElDatePicker') {
          item.prop = item.prop + item.props.type
        }
        return item
      })
    }
  },
  watch: {
    formItems: {
      handler(val) {
        this.$store.commit('setFormItems', val)
      },
      deep: true
    }
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
  .drag-form-item {
    padding: 0 30px;
    border: 1px dashed #ccc;
    position: relative;
    margin: 2px;
    &:hover {
      border: 1px solid #409eff;
    }
    &.is-active {
      border: 1px solid #409eff;
      outline: 2px solid #409EFF;
      .iconfont {
        display: initial !important;
      }
    }
    .iconfont {
      display: none;
      position: absolute;
      height: 25px;
      background-color: #409EFF;
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
    .icon-move {
      top: 0;
      left: 0;
      width: 25px;
      cursor: move;
    }
    span.iconfont {
      display: none;
      bottom: 0;
      right: 0;
      i {
        cursor: pointer;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
      }
      i + i {
        margin-left: 6px;
      }
    }
  }
}
</style>
