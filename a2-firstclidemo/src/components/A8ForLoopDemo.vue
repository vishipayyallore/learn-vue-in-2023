<template>
    <div id="divstyles">
        <h1>For Loop Demo</h1>
        <ul>
            <li v-for="technology in technologies" :key="technology">
                {{ technology }}
            </li>
        </ul>
        <br />
        <ul>
            <li v-for="data in user" :key="data">Name: {{ data.name }} :: Email: {{ data.email }} :: Contact: {{
                data.contact }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'A8ForLoopDemo',
    data() {
        return {
            technologies: ["PHP", "JavaScript", "C++", "C-sharp"],
            user: [
                {
                    name: "Jack",
                    email: "jack002@gmail.com",
                    contact: +1245555521,
                },
                {
                    name: "Stark",
                    email: "starkk002@gmail.com",
                    contact: +1245555521,
                },
                {
                    name: "Tony",
                    email: "tony002@gmail.com",
                    contact: +1245555521,
                },
            ],
        }
    }
}
</script>
  
<style scoped>
#divstyles {
    background-color: #987503;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
}
</style>
  