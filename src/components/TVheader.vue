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
        padding-bottom: 50px;
    }
</style>