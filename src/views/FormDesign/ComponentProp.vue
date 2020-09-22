<template>
  <el-form
    class="component-prop"
    label-position="top"
    v-if="hasActiveComponent"
  >
    <el-form-item label="标题">
      <el-input v-model="form.label"></el-input>
    </el-form-item>
    <el-form-item label="字段标识">
      <el-input v-model="form.prop"></el-input>
    </el-form-item>
    <el-form-item
      v-for="item in props"
      :key="item.attr"
      :label="item.label"
    >
      <component :is="item.component || 'ElInput'" v-model="form.props[item.attr]">
        <el-option v-for="option in item.options" :key="option" :value="option"></el-option>
      </component>
    </el-form-item>
    <el-form-item v-if="form.extra" label="选项">
      <draggable
        :group="{name: 'options'}"
        ghost-class="ghost-options"
        tag="ul"
        :list="form.extra.options"
        handle=".el-icon-rank"
      >
        <custom-option
          v-for="(option, index) in form.extra.options"
          :key="index"
          :value="option"
          @delete="handleOptionDelete(index)"
        ></custom-option>
      </draggable>
      <el-button type="text" icon="el-icon-plus" @click="addOption">添加选项</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { componentProps, EventName } from '@/utils'
import draggable from 'vuedraggable'
import CustomOption from '@/components/CustomOption'
export default {
  components: {
    draggable,
    CustomOption
  },
  data() {
    return {
      props: [],
      form: {}
    }
  },
  computed: {
    hasActiveComponent() {
      return Object.keys(this.form).length > 0
    }
  },
  created() {
    this.$event.$on(EventName.activeComponent, this.initForm)
  },
  methods: {
    initForm(component) {
      this.props = componentProps[component.name]
      this.form = component
    },
    handleOptionDelete(index) {
      this.form.extra.options.splice(index, 1)
    },
    addOption() {
      this.form.extra.options.push({
        label: '',
        value: ''
      })
    }
  }
}
</script>

<style lang="scss">
.component-prop {
  .el-form-item__label {
    font-weight: 500;
    padding-bottom: 0 !important;
  }
  .el-select {
    width: 100%;
  }
  .ghost-options {
    background-color: rgba(172, 225, 250, 0.28);
  }
}
</style>
