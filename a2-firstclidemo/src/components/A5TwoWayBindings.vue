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

.custom-button {
    background-color: #007bff;
    color: #fff;
    border: 1px solid #01376f;
    /* Add a border with color #01376f */
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 5px;
    /* Add rounded corners */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    /* Add a box shadow */
    font-weight: bold;
    /* Make the text bold */
    transition: background-color 0.3s;
    /* Add transition for smooth color change */
}

.custom-button:hover {
    background-color: #0056b3;
    /* Change background color on hover */
}
</style>
