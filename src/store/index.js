import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// In the state, the joke key starts out with a value of undefined.
// In the mutations, the function updateJoke has two arguments: context and joke. 
// The function will update the joke every time an axios request is made to the joke api.
// In the actions, I created a function of getNewJoke, which make an axios request to get a joke from the api.
// The argument is context, which will also be used in mutations.
// If the request succeeds, then I will console.log the response, and 
// it will pass the joke api data to the function updateJoke.
// It will select the joke by dot notation, response.data.joke.

export default new Vuex.Store({
  state: {
    joke: undefined
  },
  mutations: {
    updateJoke: function(context, joke) {
      context.joke = joke
    }
  },
  actions: {
    getNewJoke: function(context) {
      axios.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
        method: "GET"
      }).then((response) => {
        console.log(response)
        context.commit("updateJoke", response.data.joke)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
