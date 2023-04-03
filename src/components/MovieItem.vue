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
    <div id="movie-card">
        <div id="movie-card-inner">
            <div id="movie-card-front">
                <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
            </div>
            <div id="movie-card-back">
                <ul>
                    <li><em>Titolo:</em></li>
                    <li><strong>{{ movie.title }}</strong></li>
                    <li><em>Titolo originale:</em></li>
                    <li><strong>{{ movie.original_title }}</strong></li>
                    <li><em>Lingua originale:</em></li>
                    <li><span :class="`fi fi-${flags()}`"></span></li>
                    <li><em>Voto medio:</em></li>
                    <li><strong>{{ movie.vote_average }}</strong></li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
   #movie-card {
    width: 342px;
    height: 513px;
    border: 2px solid white;
        #movie-card {
            &:hover{
                transform: rotateY(180deg);
            }
        }
        #movie-card-inner{
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 1s;
            transform-style: preserve-3d;
            &:hover {
            transform: rotateY(180deg);
            }
        }   #movie-card-front, #movie-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
        }
        #movie-card-back {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #141414;
            color: white;
            transform: rotateY(180deg);
        }

   }
   img {
    width: 100%;
    height: 100%;
   }
</style>