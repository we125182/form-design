<template>
  <div class="form-design">
    <div class="left-aside">左侧列表</div>
    <div class="content">内容区域</div>
    <div class="right-aside">右侧列表</div>
  </div>
</template>

<script>
export default {}
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

  .content {
    flex: 1;
    margin: 10px;
    border: 1px dashed #cccccc;
  }

  .right-aside {
    width: 250px;
    padding: 10px;
    box-shadow: -5px 0px 5px -5px black;
  }
}
</style>
