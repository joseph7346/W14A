<template>
    <div>
        <h4>{{ joke }}</h4>
    </div>
</template>

<script>
    export default {
        name:"normal-joke",
        computed: {
            joke() {
                return this.$store.state.joke.replace(/\s/g, '_');
            }
        }
    }
</script>

<style scoped>

</style>