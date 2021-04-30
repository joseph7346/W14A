<template>
    <div>
        <button @click="getJoke()">Get New Joke</button>
    </div>
</template>

<script>
    export default {
        name: "joke-button",
        methods: {
            getJoke() {
                this.$store.dispatch("getNewJoke")
            }
        }
    }
</script>

<style scoped>

</style>