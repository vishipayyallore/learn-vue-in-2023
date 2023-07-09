<template>
    <h3>Name: {{ getName() }} | {{ getName("Sri Vari") }}</h3>
    <h3>{{ getData() }} {{ getData().Email }} {{ getData().Mobile }}</h3>
</template>
<script>
export default {
    name: "A3MethodsParameters",
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
    color: rgb(52, 225, 4);
}
</style>
