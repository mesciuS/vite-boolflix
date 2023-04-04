<script>
import {store} from "../store.js";
export default {
    data() {
        return {
            store,
        }
    },

    methods: {
        reloadPage() {
            window.location.reload();
        },
    },

    emits: ['searchEntertainmentTitle'], 

}
</script>

<template>
    <div id="wrapper">
        <div id="logo">
            <h1 @click="reloadPage">Boolflix</h1>
        </div>
        <div id="searchbar">
          <input v-model="store.searchEntertainment" @keyup.enter="$emit('searchEntertainmentTitle')" type="text" placeholder="Cerca qualcosa">
          <button @click="$emit('searchEntertainmentTitle')">Cerca</button> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 150px;
        padding-left: 100px;
        padding-right: 100px;
        background-color: #141414;
        #logo {
            h1 {
                font-size: 6em;
                padding-right: 75px;
                cursor: pointer;
            }
        }    
        #searchbar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding-bottom: 50px;
            padding-top: 50px;
            input {
                width: 300px;
                height: 40px;
                border: none;
            }
            button {
                width: 100px;
                padding: 10px;
                border: none;
                border-radius: 15px;
            }
            ::placeholder {
                text-align: center; 
                font-size: 2em;
            }
        }
    }
</style>