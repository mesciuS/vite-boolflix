import {reactive} from 'vue';
export const store = reactive ({
    APIcall: "https://api.themoviedb.org/3",
    APIpath: "",
    APItvpath: "",
    APIkey: "?api_key=08f50bad7c2f3b94c80be47efdcfb212",
    APIquery: "",
    movies: [],
    series: [],
    searchEntertainment: "",
})