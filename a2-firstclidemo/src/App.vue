<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to first Vue.js App" />
  <A1FirstOne />
  <A2Interpolation />
  <A3MethodsParameters />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import A1FirstOne from "./components/A1FirstOne.vue";
import A2Interpolation from "./components/A2Interpolation.vue";
import A3MethodsParameters from "./components/A3MethodsParameters.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    A1FirstOne,
    A2Interpolation,
    A3MethodsParameters,
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
