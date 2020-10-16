<template>
  <el-dialog :visible.sync="visible" class="generate-code" width="600px" title="生成代码" @opened="initCode">
    <div ref="code" class="code-view"></div>
    <dialog-footer slot="footer" @confirm="submit" @cancel="cancel"></dialog-footer>
  </el-dialog>
</template>

<script>
import DialogMixin from '@/mixins/DialogMixin'
import { renderCode, renderContainerCode } from '@/utils/renderCode'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { mapState } from 'vuex'
import prettier from 'prettier/standalone'
import parserHtml from 'prettier/parser-html'

export default {
  mixins: [DialogMixin],
  data() {
    return {
      editor: null
    }
  },
  computed: {
    ...mapState(['containerProp', 'formItems'])
  },
  methods: {
    initCode() {
      const value = this.renderCode()
      const formatValue = prettier.format(value, {
        parser: 'vue',
        plugins: [parserHtml]
      })
      if (this.editor) {
        this.editor.setValue(formatValue)
      } else {
        this.editor = monaco.editor.create(this.$refs.code, {
          language: 'html',
          value: formatValue
        })
      }
    },
    renderCode() {
      console.log(this.formItems)
      const formItems = []
      const nestedTemplate = this.formItems.reduce((pre, formItem) => {
        formItems.push(`${formItem.prop}: ''`)
        pre += renderCode(formItem)
        return pre
      }, '')
      const template = renderContainerCode(this.containerProp, nestedTemplate, formItems.join(',\n\t\t\t\t\t\t\t\t'))
      return template
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
    background-color: #fbfbfb !important;
  }
}
</style>
