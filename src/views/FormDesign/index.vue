<template>
  <div class="form-design">
    <div class="left-aside">
      <draggable
        tag="ul"
        :list="list1"
        v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
      >
        <li class="drag-item" v-for="item in list1" :key="item.id">{{ item.name }}</li>
      </draggable>
    </div>
    <div class="content" group="people">
      <draggable
        tag="ul"
        :list="list1"
        v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
      >
        <div class="drag-item" v-for="item in list1" :key="item.id">{{ item.name }}</div>
      </draggable>
    </div>
    <div class="right-aside">右侧列表</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      list1: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ],
      list2: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ]
    }
  },
  methods: {
    handleMove () {
      return true
    },
    forceFallback () {
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
    // background-color: yellowgreen;
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
    // flex: 1;
    width: 250px;
    margin: 10px;
    border: 1px dashed #cccccc;
  }

  .right-aside {
    width: 250px;
    padding: 10px;
    box-shadow: -5px 0px 5px -5px black;
  }

.target-ghost {
  height: 3px;
  padding: 0;
  background-color: red;
  overflow: hidden;
}
}
</style>
