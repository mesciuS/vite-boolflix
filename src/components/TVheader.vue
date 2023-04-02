<script>
import {store} from "../store.js";
export default {
    data() {
        return {
            store,
        }
    },

    emits: ['searchShowTitle'], 

}
</script>

<template>
  <div id="searchbar">
    <input v-model="store.searchShow" @keyup.enter="$emit('searchShowTitle')" type="text" placeholder="Cerca una Serie TV">
    <button @click="('searchShowTitle')">Cerca</button> 
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