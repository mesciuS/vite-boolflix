<script>
import {store} from "../store.js";
export default {
    data() {
        return {
            store,
        }
    },

    emits: ['searchMovieTitle'], 

}
</script>

<template>
  <div id="searchbar">
    <input v-model="store.searchMovie" @keyup.enter="$emit('searchMovieTitle')" type="text" placeholder="Cerca un Film">
    <button @click="('searchMovieTitle')">Cerca</button> 
  </div>
</template>

<style lang="scss" scoped>
    #searchbar {
        padding-bottom: 50px;
    }
</style>