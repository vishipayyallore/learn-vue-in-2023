<template>
    <h1 id="pages2" v-if="display">If Else Condition - display </h1>
    <h1 id="pages2" v-if="show">If Else Condition - show </h1>
</template>
  
<script>
export default {
    name: 'A7IfElseDemo',
    data() {
        return {
            display: true,
            show: true
        }
    }
}
</script>
  
<style scoped>
#pages2 {
    background-color: #42b983;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
}
</style>
  