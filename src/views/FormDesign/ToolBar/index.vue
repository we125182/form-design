<template>
  <div class="tool-bar">
    <div class="tool-bar__main">
      <el-button @click="showPreviewDialog">预览效果</el-button>
      <el-button @click="showGenerateCode">生成代码</el-button>
    </div>

    <preview-dialog v-model="previewDialogVisible"></preview-dialog>

    <generate-code v-model="generateCodeVisible"></generate-code>
  </div>
</template>

<script>
import PreviewDialog from './PreviewDialog'
import GenerateCode from './GenerateCode'

export default {
  components: {
    PreviewDialog,
    GenerateCode
  },
  data() {
    return {
      previewDialogVisible: false,
      generateCodeVisible: false
    }
  },
  methods: {
    showPreviewDialog() {
      this.previewDialogVisible = true
    },
    showGenerateCode() {
      this.generateCodeVisible = true
    }
  }
}
</script>

<style lang="scss">
.tool-bar {
  &__main {
    height: 50px;
    line-height: 50px;
    text-align: right;
  }
}
</style>
