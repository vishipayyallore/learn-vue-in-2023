<template>
    <h2>A5 Two Way Bindings Component</h2>
    <input type="text" v-model="count" placeholder="Add the Number" />
    <h3>Count: {{ count }}</h3>
    <button v-on:click="addNumberToCount()">Count ++</button>
</template>

<script>
export default {
    name: "A5TwoWayBindings",
    data: function () {
        return {
            count: 0,
        };
    },
    methods: {
        addNumberToCount: function () {
            this.count++;
        },
    },
};
</script>

<style scoped>
h3 {
    color: rgb(143, 2, 143);
}
</style>
