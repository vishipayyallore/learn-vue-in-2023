<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to first Vue.js App" />
  <A1FirstOne />
  <A2Interpolation />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import A1FirstOne from "./components/A1FirstOne.vue";
import A2Interpolation from "./components/A2Interpolation.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    A1FirstOne,
    A2Interpolation,
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
