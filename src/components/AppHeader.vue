<script>
import {store} from "../store.js";
export default {
    data() {
        return {
            store,
        }
    },

    emits: ['searchEntertainmentTitle'], 

}
</script>

<template>
  <div id="searchbar">
    <input v-model="store.searchEntertainment" @keyup.enter="$emit('searchEntertainmentTitle')" type="text" placeholder="Cerca qualcosa">
    <button @click="('searchEntertainmentTitle')">Cerca</button> 
  </div>
</template>

<style lang="scss" scoped>
    #searchbar {
        display: flex;
        flex-direction: column;
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
</style>