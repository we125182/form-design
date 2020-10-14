<template>
  <div class="drag-form-item" @click="$emit('click')">
    <i class="iconfont icon-move"></i>
    <slot></slot>
    <span class="iconfont">
      <i class="el-icon-document-copy" @click="handleCopy"></i>
      <i class="el-icon-delete" @click="handleDelete"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  created() {
    this.$set(this.form, this.prop, this.value)
  },
  methods: {
    handleCopy() {
      this.$emit('copy')
    },
    handleDelete() {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss">
.drag-form-item {
  padding: 0 30px;
  border: 1px dashed #ccc;
  position: relative;
  margin: 2px;
  &:hover {
    border: 1px solid #409eff;
    background-color: rgba(64, 158, 255, 0.12);
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
</style>
