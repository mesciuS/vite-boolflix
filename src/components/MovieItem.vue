<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {store} from "../store.js";
export default {
    data() {
        return {
            store,
        }
    },

    props: {
        movie: Object,
    },

    methods: {
        flags() {
            let language = this.movie.original_language;
            if (language == "en") {
                language = "us";
            } else if (language == "ja") {
                language = "jp";
            } else if (language == "ko") {
                language = "kr";
            } else if (language == "zh") {
                language = "cn";
            } else if (language == "") {
                language = 'unknown';
            }
            return language;
        }
    },

}
</script>

<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
        <br>
        <em>Titolo:</em> <strong>{{ movie.title }}</strong>
        <br>
        <em>Titolo originale:</em> <strong>{{ movie.original_title }}</strong>
        <br>
        <em>Lingua originale:</em> <span :class="`fi fi-${flags()}`"></span>
        <br>
        <em>Voto medio:</em> <strong>{{ movie.vote_average }}</strong>
        <hr>
    </div>
</template>

<style lang="scss" scoped>
   
</style>