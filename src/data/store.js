import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/',
    // creo due array vuoti
        tv: [],
        movie: [],
        type: '',
        apiParams:{
        api_key: '4bb17dce1fc18e0756ab428f7da080f6',
        query: '',
        language: 'it-IT'
    },
    rating(){
        Math.ceil(this.card.vote_average / 2)
    }
    
})
