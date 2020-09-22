<template>
  <div class="el-radio-group" role="radiogroup" @keydown="handleKeydown">
    <slot></slot>
  </div>
</template>

<script>
import { RadioGroup } from 'element-ui'
export default {
  name: 'ElRadioGroup',
  extends: RadioGroup
}
</script>
