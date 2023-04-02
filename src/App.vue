<script>
import {store} from "./store.js";
import axios from "axios";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AppMain from './components/AppMain.vue';
// import AppHeader from "./components/AppHeader.vue";
// import TVheader from "./components/TVheader.vue";
import AppHome from "./components/AppHome.vue";
export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppMain,
    // AppHeader,
    // TVheader,
    AppHome,
  },

  methods: {
    searchMovieTitle() {
      // cambiato il path per restituire tv e film ma funzione rimasta uguale
      this.store.APIpath = '/search/movie';
      this.store.APIquery = '&query=' + encodeURIComponent(this.store.searchMovie);
      axios.get(this.store.APIcall + this.store.APIpath + this.store.APIkey + this.store.APIquery).then((res)=>{
        this.store.movies = res.data.results;
      });
    },
    searchShowTitle() {
      // cambiato il path per restituire tv e film ma funzione rimasta uguale
      this.store.APItvpath = '/search/tv';
      this.store.APIquery = '&query=' + encodeURIComponent(this.store.searchShow);
      axios.get(this.store.APIcall + this.store.APItvpath + this.store.APIkey + this.store.APIquery).then((tvres)=>{
        this.store.series = tvres.data.results;
      });
    },
  },
}

</script>

<template>
  <AppHome></AppHome>
  <!-- <AppHeader @searchMovieTitle="searchMovieTitle()"></AppHeader>
  <TVheader @searchShowTitle="searchShowTitle()"></TVheader> -->
  <AppMain></AppMain>
</template>

<style scoped>

</style>
