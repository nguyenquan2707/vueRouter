<template>
  <AppNav></AppNav>
  <!-- Thường sẽ đặt router-view trong app -->
  <router-view></router-view>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    AppNav: Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
