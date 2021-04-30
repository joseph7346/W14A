<template>
  <div>
    <!-- Created, defined, registered, and used joke-button, normal-joke, snake-joke, and loud-joke components.
    Used v-if to change the value of the key jokeState to what type of joke they are in each of the joke components.
    Created three buttons. When clicked, it will show the component that has the jokeState value it is asking for.
    In the data(), the default value for the key jokeState will be normal. -->
    <joke-button></joke-button>
    <normal-joke v-if="jokeState == 'normal'"></normal-joke>
    <snake-joke v-if="jokeState == 'snake'"></snake-joke>
    <loud-joke v-if="jokeState == 'loud'"></loud-joke>
    <button @click="jokeState = 'normal'">Normal</button>
    <button @click="jokeState = 'snake'">Snake</button>
    <button @click="jokeState = 'loud'">Loud</button>
  </div>
</template>

<script>
import JokeButton from "./components/JokeButton.vue";
import NormalJoke from "./components/NormalJoke.vue";
import SnakeJoke from "./components/SnakeJoke.vue";
import LoudJoke from "./components/LoudJoke.vue";

export default {
  name: 'App',
  components: {
    JokeButton,
    NormalJoke,
    SnakeJoke,
    LoudJoke
  },
  data() {
    return {
      jokeState: "normal"
    }
  }
}
</script>

<style>
</style>
