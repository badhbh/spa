<template>
  <div id="app">
  <!-- здесь будут отображаться наши компоненты -->
  <router-link to="/about">About</router-link>
  <router-link to="/login">Login</router-link>

  <router-view>
  </router-view>
  <div>xnj-nj</div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<!-- стили компонента -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>