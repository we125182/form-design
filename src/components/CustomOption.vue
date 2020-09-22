<template>
  <li class="custom-option">
    <el-input v-model="value.label" size="mini"></el-input>
    <el-input v-model="value.value" size="mini"></el-input>
    <i class="el-icon-remove-outline" @click="remove"></i>
    <i class="el-icon-rank"></i>
  </li>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    remove() {
      this.$emit('delete', this.value)
    }
  }
}
</script>

<style lang="scss">
.custom-option {
  display: flex;
  align-items: center;
  padding: 2px 0;
  margin-bottom: 8px;
  i {
    font-size: 20px;
    margin-left: 4px;
  }
  .el-icon-remove-outline {
    color: #F56C6C;
  }
}
</style>
