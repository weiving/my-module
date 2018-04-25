<template>
  <div class="page-wrap">
    <div class="page-head">
      我的组件-记录
    </div>
    <div class="page-content">
      <router-link to="/pagination/paginationIndex"><h2>分页组件</h2></router-link>
    </div>



  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
