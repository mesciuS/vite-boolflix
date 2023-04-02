<script>
import {store} from "./store.js";
import axios from "axios";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AppMain from './components/AppMain.vue';
import AppHome from "./components/AppHome.vue";
export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppMain,
    AppHome,
  },
}

</script>

<template>
  <AppHome></AppHome>
  <AppMain></AppMain>
</template>

<style scoped>

</style>
