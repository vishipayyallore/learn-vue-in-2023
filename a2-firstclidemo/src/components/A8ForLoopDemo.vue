<template>
    <div id="divstyles">
        <h1>For Loop Demo</h1>
        <ul>
            <li v-for="technology in technologies" :key="technology">
                {{ technology }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'A8ForLoopDemo',
    data() {
        return {
            technologies: ["PHP", "JavaScript", "C++", "C-sharp"],
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
  