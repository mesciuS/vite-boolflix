<script>
import {store} from "../store.js";
import axios from "axios";
import AppHeader from "./AppHeader.vue";
export default {
    data() {
        return {
            store,
        }
        
    },
    
    components: {
        AppHeader,
    },

    methods: {
        search() {
            this.searchMovieTitle();
            this.searchShowTitle();
        },
        searchMovieTitle() {
            this.store.APIpath = '/search/movie';
            this.store.APIquery = '&query=' + encodeURIComponent(this.store.searchEntertainment);
            axios.get(this.store.APIcall + this.store.APIpath + this.store.APIkey + this.store.APIquery).then((res) => {
                this.store.movies = res.data.results;
            });
        },
        searchShowTitle() {
            this.store.APItvpath = '/search/tv';
            this.store.APIquery = '&query=' + encodeURIComponent(this.store.searchEntertainment);
            axios.get(this.store.APIcall + this.store.APItvpath + this.store.APIkey + this.store.APIquery).then((tvres) => {
                this.store.series = tvres.data.results;
            });
        },
    },
    
}
</script>

<template>
    <AppHeader @searchEntertainmentTitle="search()"></AppHeader>
</template>

<style lang="scss" scoped>
    
</style>