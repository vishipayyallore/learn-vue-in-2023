<template>
    <h2>A4EventsParameters</h2>
    <h3>Name: {{ getName() }} | {{ getName("Sri Vari") }}</h3>
    <h3>{{ getData() }} {{ getData().Email }} {{ getData().Mobile }}</h3>
    <button v-on:click="getData()">Get Data</button>
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
        }
    },
};
</script>

<style scoped>
h3 {
    color: rgb(187, 190, 2);
}
</style>
