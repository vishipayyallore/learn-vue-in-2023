<template>
    <h2>Name: {{ getName() }} | {{ getName("Sri Vari") }}</h2>
</template>
<script>
export default {
    name: "A3MethodsParameters",
    data: function () {
        return {
            getName: function (name) {
                return name || "Srivaru";
            },
        };
    },
};
</script>

<style scoped>
h2 {
    color: rgb(52, 225, 4);
}
</style>
