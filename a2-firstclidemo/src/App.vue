<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to first Vue.js App" />
  <NewOne />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NewOne from "./NewOne.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NewOne
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
