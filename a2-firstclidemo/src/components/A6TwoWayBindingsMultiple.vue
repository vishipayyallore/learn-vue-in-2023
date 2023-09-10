<template>
    <h2>A6 Two Way Bindings to Multiple Input boxes Component</h2>
    <label for="circket">Circket</label>
    <input type="checkbox" name="" id="" />

    <label for="circket">Football</label>
    <input type="checkbox" name="" id="" />

    <label for="circket">Hockey</label>
    <input type="checkbox" name="" id="" />

    <h3>Name: {{ name }}</h3>
    <button v-on:click="addNumberToCount()" class="custom-button">Count ++</button>
</template>

<script>
export default {
    name: "A6TwoWayBindingsMultiple",
    data: function () {
        return {
            name: "No Name",
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
    color: #a5a803;
}

.custom-button {
    background-color: #d7da21;
    color: #fff;
    border: 1px solid #a5a803;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    transition: background-color 0.3s, transform 0.1s;
    /* Add transition for color and transform */
}

.custom-button:hover {
    background-color: #bcbe10;
}

.custom-button:active {
    transform: translateY(2px);
    /* Add a slight push effect on click */
}
</style>
