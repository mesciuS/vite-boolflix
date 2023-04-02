<script>
import {store} from "../store.js";
import axios from "axios";
import AppHeader from "./AppHeader.vue";
import TVheader from "./TVheader.vue";
export default {
    data() {
        return {
            store,
            choseBtnMovie: true,
            choseBtnShow: true,

        }
        
    },
    
    components: {
        AppHeader,
        TVheader,
    },

    methods: {
        searchMovieTitle() {
            // cambiato il path per restituire tv e film ma funzione rimasta uguale
            this.store.APIpath = '/search/movie';
            this.store.APIquery = '&query=' + encodeURIComponent(this.store.searchMovie);
            axios.get(this.store.APIcall + this.store.APIpath + this.store.APIkey + this.store.APIquery).then((res) => {
                this.store.movies = res.data.results;
            });
        },
        searchShowTitle() {
            // cambiato il path per restituire tv e film ma funzione rimasta uguale
            this.store.APItvpath = '/search/tv';
            this.store.APIquery = '&query=' + encodeURIComponent(this.store.searchShow);
            axios.get(this.store.APIcall + this.store.APItvpath + this.store.APIkey + this.store.APIquery).then((tvres) => {
                this.store.series = tvres.data.results;
            });
        },
    },
    
}
</script>

<template>
    <div id="btn-container">
        <button @click="choseBtnMovie = !choseBtnMovie" id="film-btn">FILM</button>
        <button @click="choseBtnShow = !choseBtnShow" id="show-btn">SERIE TV</button>
        <AppHeader v-show="!choseBtnMovie" @searchMovieTitle="searchMovieTitle()"></AppHeader>
        <TVheader v-show="!choseBtnShow" @searchShowTitle="searchShowTitle()"></TVheader>
    </div>
</template>

<style lang="scss" scoped>
    #btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        #film-btn {
            width: 500px;
            height: 500px;
            border-radius: 50px;
        }
        #show-btn {
            width: 500px;
            height: 500px;
            border-radius: 50px;
        }
    }
</style>