<script>
import {store} from "../store.js";
import axios from "axios";
import AppHeader from "./AppHeader.vue";
import AppLogo from "./AppLogo.vue";
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
        AppLogo,
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
    <AppLogo></AppLogo>
    <h2>Cosa vuoi guardare?</h2>
    <div id="btn-container">
        <button @click="choseBtnMovie = !choseBtnMovie" v-show="choseBtnMovie" id="film-btn"><span>FILM</span></button>
        <button @click="choseBtnMovie = !choseBtnMovie" v-show="choseBtnMovie" id="show-btn"><span>SERIE TV</span></button>
    </div>
    <AppHeader v-show="!choseBtnMovie" @searchEntertainmentTitle="search()"></AppHeader>
</template>

<style lang="scss" scoped>
    h2 {
        text-align: center;
        padding-top: 30px;
    }
    #btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        padding-top: 100px;
        #film-btn {
            width: 500px;
            height: 500px;
            border-radius: 50px;
            border: none;
        }
        #show-btn {
            width: 500px;
            height: 500px;
            border-radius: 50px;
            border: none;
        }
        span {
            font-size: 4em;
            font-weight: bold;
        }
    }
</style>