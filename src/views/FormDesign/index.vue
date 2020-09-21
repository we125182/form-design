<template>
  <div class="form-design">
    <left-aside :components="components"></left-aside>
    <div class="content">
      <form-container :components="formItems"></form-container>
    </div>
    <right-aside></right-aside>
  </div>
</template>

<script>
import LeftAside from './LeftAside'
import RightAside from './RightAside'
import FormContainer from './FormContainer'
import { components } from '@/utils'
export default {
  components: {
    LeftAside,
    RightAside,
    FormContainer
  },
  data() {
    return {
      components,
      formItems: [
      ]
    }
  },
  methods: {
    handleMove() {
      return true
    },
    forceFallback() {
      return true
    }
  }
}
</script>

<style lang="scss">
.form-design {
  height: 100%;
  display: flex;

  .left-aside {
    width: 250px;
    padding: 10px;
    box-shadow: 5px 0px 5px -5px black;
  }

  .drag-item {
    padding: 8px;
    cursor: move;
    font-size: 12px;
    display: block;
    width: 48%;
    line-height: 26px;
    position: relative;
    float: left;
    left: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1%;
    color: #409EFF;
    border: 1px dashed #409EFF;
  }

  .content {
    flex: 1;
    margin: 10px;
    border: 1px dashed #cccccc;
  }

  .drag-container, .transition-group {
    height: 100%;
  }
}
</style>
