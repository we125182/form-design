<template>
  <div class="dialog-footer">
    <el-button type="primary" @click="confirm">{{ confirmText }}</el-button>
    <el-button @click="cancel">{{ cancelText }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    confirmText: {
      type: String,
      default: '保存'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss">
.dialog-footer {
  text-align: right;
}
</style>
