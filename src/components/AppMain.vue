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
  <div id="movies-list">
    <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
    <TVitem v-for="show in store.series" :show="show"></TVitem>
  </div>
</template>

<style lang="scss" scoped>

</style>
