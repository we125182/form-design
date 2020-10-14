import DialogFooter from '@/components/DialogFooter'

export default {
  components: {
    DialogFooter
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      visible: this.value
    }
  },
  watch: {
    visible(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.visible = val
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.save()
        }
      })
    },
    save() {
    },
    cancel() {
      this.visible = false
    }
  }
}
