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

    computed: {
        numToStars() {
            return Math.ceil(this.movie.vote_average / 2);
        }
    }

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
                    <li><strong>Titolo:</strong></li>
                    <li>{{ movie.title }}</li>
                    <li><strong>Lingua originale:</strong></li>
                    <li><span :class="`fi fi-${flags()}`"></span></li>
                    <li><strong>Voto medio:</strong></li>
                    <li><i v-for="number in numToStars" class="fa-solid fa-star"></i><i v-for="number in 5 - numToStars" class="fa-regular fa-star"></i></li>
                    <li><strong>Sinossi:</strong></li>
                    <li>{{ movie.overview }}</li>
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
    border-radius: 15px;
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
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            &:hover {
            transform: rotateY(180deg);
            }
        }   #movie-card-front, #movie-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            backface-visibility: hidden;
        }
        #movie-card-back {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            overflow-y: scroll;
            background-color: #141414;
            color: white;
            transform: rotateY(180deg);
            i {
                color: #fadb10;
            }
        }

   }
   img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
   }
</style>