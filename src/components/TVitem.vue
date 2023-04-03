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
    <div id="tv-card">
        <div id="tv-card-inner">
            <div id="tv-card-front">
                <img :src="'https://image.tmdb.org/t/p/w342' + show.poster_path" alt="">
            </div>
            <div id="tv-card-back">
                <ul>
                    <li><em>Titolo:</em></li>
                    <li><strong>{{ show.original_name }}</strong></li>
                    <li><em>Lingua originale:</em></li>
                    <li><span :class="`fi fi-${TVflags()}`"></span></li>
                    <li><em>Voto medio:</em></li>
                    <li><strong>{{ show.vote_average }}</strong></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
   #tv-card {
    width: 342px;
    height: 513px;
    border: 2px solid white;
        #tv-card {
            &:hover{
                transform: rotateY(180deg);
            }
        }
        #tv-card-inner{
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 1s;
            transform-style: preserve-3d;
            &:hover {
            transform: rotateY(180deg);
            }
        }   #tv-card-front, #tv-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
        }
        #tv-card-back {
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