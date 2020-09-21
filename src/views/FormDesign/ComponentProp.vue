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
  </el-form>
</template>

<script>
import { componentProps, EventName } from '@/utils'
export default {
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
      console.log(this.form)
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
}
</style>
