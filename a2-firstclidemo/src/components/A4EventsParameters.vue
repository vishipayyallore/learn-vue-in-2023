<template>
    <h2>A4EventsParameters</h2>
    <h3>Name: {{ getName() }} | {{ getName("Sri Vari") }}</h3>
    <h3>{{ getData() }} {{ getData().Email }} {{ getData().Mobile }}</h3>
    <button v-on:click="getData()" class="custom-button">Get Data</button>

    <button v-on:click="greetUser('Sri Varu')" class="custom-button">Greet User</button>
</template>

<script>
export default {
    name: "A4EventsParameters",
    data: function () {
        return {
            email: "srivaru@god.com",
            mobile: "1234567890",
        };
    },
    methods: {
        getName: function (name) {
            return name || "Srivaru";
        },

        getData() {
            console.log("getData called ...(A4EventsParameters.vue)");
            return {
                Email: this.email,
                Mobile: this.mobile,
            }
        },

        greetUser(userName) {
            console.log(`greetUser() called ...(A4EventsParameters.vue). Hello ${userName}`);
        },
    },
};
</script>

<style scoped>
h3 {
    color: rgb(187, 190, 2);
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
    transition: background-color 0.3s; /* Add transition for smooth color change */
}

.custom-button:hover {
  background-color: #0056b3; /* Change background color on hover */
}
</style>
