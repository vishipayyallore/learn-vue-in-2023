<template>
    <h1>NewOne {{ email }} | {{ mobile }} | {{ 10 + 10 }} | {{ "Hello World".length }}</h1>
    <h1>Name: {{ getName() }} | {{ getName("Sri Vari") }}</h1>
    <h1>Changing Value {{ mobile = 9010050445 }} </h1>
    <h1>Boolean {{ mobile == 9010050445 }} </h1>
</template>
<script>
export default {
    name: "NewOne",
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
h1 {
    color: rgb(7, 94, 160);
}
</style>
