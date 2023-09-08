<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to first Vue.js App" />
  <A4EventsParameters />
  <A3MethodsParameters />
  <A2Interpolation />
  <A1FirstOne />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import A1FirstOne from "./components/A1FirstOne.vue";
import A2Interpolation from "./components/A2Interpolation.vue";
import A3MethodsParameters from "./components/A3MethodsParameters.vue";
import A4EventsParameters from "./components/A4EventsParameters.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    A1FirstOne,
    A2Interpolation,
    A3MethodsParameters,
    A4EventsParameters,
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
