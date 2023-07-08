<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to first Vue.js App" />
  <FirstOne />
  <SecondOne />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FirstOne from "./components/FirstOne.vue";
import SecondOne from "./components/SecondOne.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FirstOne,
    SecondOne,
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
