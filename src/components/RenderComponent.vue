<template>
  <div class="drag-form-item" @click="$emit('click')">
    <i class="iconfont icon-move"></i>
    <el-form-item :label="label">
      <component :is="name" v-bind="props" v-model="form[prop]"></component>
    </el-form-item>
    <span class="iconfont">
      <i class="el-icon-document-copy" @click="handleCopy"></i>
      <i class="el-icon-delete" @click="handleDelete"></i>
    </span>
  </div>
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
      required: true
    }
  },
  data() {
    return {
      form: {}
    }
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
