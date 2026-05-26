<script lang="ts" setup >
import Person from './components/Person.vue'
// export default {
//   name: 'App',//组件名
//   components:{Person}//注册组件
// }
</script>

<template>
  <div class="app">
    <h1>hello</h1>
  <Person/>
  </div>
</template>

<style scoped>
  .app {
    background: red;
    height: 300px;
  }
</style>
