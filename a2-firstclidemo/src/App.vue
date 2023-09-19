<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Welcome to first Vue.js App" />
  <A8ForLoopDemo />
  <A7IfElseDemo />
  <A6TwoWayBindingsMultiple />
  <A5TwoWayBindings />
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
import A5TwoWayBindings from "./components/A5TwoWayBindings.vue";
import A6TwoWayBindingsMultiple from "./components/A6TwoWayBindingsMultiple.vue";
import A7IfElseDemo from "./components/A7IfElseDemo.vue";
import A8ForLoopDemo from "./components/A8ForLoopDemo.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    A1FirstOne,
    A2Interpolation,
    A3MethodsParameters,
    A4EventsParameters,
    A5TwoWayBindings,
    A6TwoWayBindingsMultiple,
    A7IfElseDemo,
    A8ForLoopDemo,
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
