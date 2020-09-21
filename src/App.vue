<template>
  <div id="app">
    <layout-header></layout-header>
    <section class="main">
      <router-view/>
    </section>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader'
export default {
  components: {
    LayoutHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  flex: 1;
  overflow: hidden;
}
</style>
