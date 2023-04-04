<script>
import {store} from "../store.js";
import MovieItem from "./MovieItem.vue"
import TVitem from "./TVitem.vue";
export default {
    data() {
        return {
            store,
        }
    },

    components: {
        MovieItem,
        TVitem,
    }

}
</script>

<template>
  <h2>movies</h2>
  <div id="movies-list">
    <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
  </div>
  <h2>series</h2>
  <div id="shows-list">
    <TVitem v-for="show in store.series" :show="show"></TVitem>
  </div>
</template>

<style lang="scss" scoped>
  #movies-list, #shows-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
    padding-bottom: 100px;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2em;
    padding-bottom: 30px;
  }
</style>
