<template>
  <div class="form-design">
    <left-aside></left-aside>
    <div class="content">
      <tool-bar></tool-bar>
      <form-container :components="formItems"></form-container>
    </div>
    <right-aside></right-aside>
  </div>
</template>

<script>
import LeftAside from './LeftAside/index'
import RightAside from './RightAside/index'
import FormContainer from './FormContainer/index'
import ToolBar from './ToolBar/index'
export default {
  components: {
    LeftAside,
    RightAside,
    ToolBar,
    FormContainer
  },
  data() {
    return {
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
    margin: 0 10px 10px;
  }

  .drag-container, .transition-group {
    height: 100%;
  }
}
</style>
