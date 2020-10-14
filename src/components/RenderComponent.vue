<template>
  <el-form-item :label="label">
    <component :is="name" v-bind="props" v-model="form[prop]">
      <template v-if="extra">
        <component
          :is="extra.name"
          v-for="option in extra.options"
          :key="option.value"
          v-bind="option"
        >
          {{option.label}}
        </component>
      </template>
    </component>
  </el-form-item>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    prop: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: () => ({})
    },
    extra: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: [Object, Array, String],
      default: ''
    }
  },
  data() {
    return {
      form: {}
    }
  },
  created() {
    this.$set(this.form, this.prop, this.value)
  }
}
</script>

<style lang="scss">
</style>
