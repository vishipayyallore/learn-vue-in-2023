<template>
    <h3>A2Interpolation {{ email }} | {{ mobile }} | {{ 10 + 10 }} | {{ "Hello World".length }}</h3>
    <h3>Name: {{ getName() }} | {{ getName("Sri Vari") }}</h3>
    <h3>Changing Value {{ mobile = 9010050445 }} </h3>
    <h3>Boolean {{ mobile == 9010050445 }} </h3>
</template>
<script>
export default {
    name: "A2Interpolation",
    data: function () {
        return {
            email: "srivaru@god.com",
            mobile: "1234567890",
            getName: function (name) {
                return name || "Srivaru";
            },
        };
    },
};
</script>

<style scoped>
h3 {
    color: rgb(4, 130, 225);
}
</style>
