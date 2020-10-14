<template>
  <el-dialog :visible.sync="visible" class="generate-code" width="600px" title="生成代码" @opened="initCode">
    <div ref="code" class="code-view"></div>
    <dialog-footer slot="footer" @confirm="submit" @cancel="cancel"></dialog-footer>
  </el-dialog>
</template>

<script>
import DialogMixin from '@/mixins/DialogMixin'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export default {
  mixins: [DialogMixin],
  data() {
    return {
      editor: null
    }
  },
  methods: {
    initCode() {
      if (!this.editor) {
        this.editor = monaco.editor.create(this.$refs.code, {
          value: '<template></template>',
          language: 'html'
        })
      }
    },
    save() {

    }
  }
}
</script>

<style lang="scss">
.generate-code {
  .code-view {
    // padding: 10px 10px 10px 0;
    border: 1px solid #dddddd;
    height: 400px;
    box-sizing: content-box;
    overflow: hidden;
  }
  .monaco-editor {
    // padding: 10px 10px 10px 0;
    background-color: #eeeeee !important;
    box-sizing: border-box;
  }
  .margin {
    background-color: #eeeeee !important;
  }
}
</style>
