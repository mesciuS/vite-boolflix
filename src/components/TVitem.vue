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
        show: Object,
    },

    methods: {
        TVflags() {
            let language = this.show.original_language;
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
        <img :src="'https://image.tmdb.org/t/p/w342' + show.poster_path" alt="">
        <br>
        <em>Titolo:</em> <strong>{{ show.original_name }}</strong>
        <br>
        <em>Lingua originale:</em> <span :class="`fi fi-${TVflags()}`"></span>
        <br>
        <em>Voto medio:</em> <strong>{{ show.vote_average }}</strong>
        <hr>
    </div>
</template>

<style lang="scss" scoped>
   
</style>