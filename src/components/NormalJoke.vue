<template>
    <div>
        <h3>{{ joke }}</h3>
    </div>
</template>

<script>
// In the computed, the function joke will return the key joke from the state by dot notation.
    export default {
        name:"normal-joke",
        computed: {
            joke() {
                return this.$store.state.joke;
            }
        }
    }
</script>

<style scoped>

</style>