<template>
    <h2>SecondOne {{ email }} | {{ mobile }} | {{ 10 + 10 }} | {{ "Hello World".length }}</h2>
    <h2>Name: {{ getName() }} | {{ getName("Sri Vari") }}</h2>
    <h2>Changing Value {{ mobile = 9010050445 }} </h2>
    <h2>Boolean {{ mobile == 9010050445 }} </h2>
</template>
<script>
export default {
    name: "SecondOne",
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
h2 {
    color: rgb(4, 130, 225);
}
</style>
