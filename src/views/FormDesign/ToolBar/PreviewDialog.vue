<template>
  <el-dialog :visible.sync="visible" class="preview-dialog" width="600px" title="预览效果">
    <el-form ref="form" v-bind="containerProp">
      <render-component
        v-for="formItem in formItems"
        :key="formItem.prop"
        v-bind="formItem"
      ></render-component>
    </el-form>
    <dialog-footer confirmText="确定" @confirm="submit" @cancel="cancel"></dialog-footer>
  </el-dialog>
</template>

<script>
import RenderComponent from '@/components/RenderComponent'
import DialogMixin from '@/mixins/DialogMixin'
import { mapState } from 'vuex'

export default {
  components: {
    RenderComponent
  },
  mixins: [DialogMixin],
  computed: {
    ...mapState(['containerProp', 'formItems'])
  },
  methods: {
    save() {

    }
  }
}
</script>

<style lang="scss">
.preview-dialog {
  text-align: initial;
}
</style>
