<template>
  <el-form
    class="form-prop"
    label-position="top"
  >
    <el-form-item label="表单数据对象">
      <el-input v-model="form.model"></el-input>
    </el-form-item>
    <el-form-item label="行内表单">
      <el-switch v-model="form.inline"></el-switch>
    </el-form-item>
    <el-form-item label="标签位置">
      <el-radio-group v-model="form.labelPosition">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="form.labelWidth"></el-input-number>
    </el-form-item>
    <el-form-item label="组件尺寸">
      <el-radio-group v-model="form.size">
        <el-radio-button label="medium"></el-radio-button>
        <el-radio-button label="small"></el-radio-button>
        <el-radio-button label="mini"></el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        modelName: 'form',
        inline: false,
        labelPosition: 'right',
        labelWidth: 100,
        size: 'small'
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        const prop = Object.assign({}, val)
        prop.labelWidth = prop.labelWidth + 'px'
        this.$store.commit('setContainerProp', prop)
      }
    }
  }
}
</script>

<style lang="scss">
.form-prop {
  .el-form--label-top .el-form-item__label {
    padding-bottom: 0;
  }
  .el-form-item__label {
    font-weight: 500;
  }
}
</style>
