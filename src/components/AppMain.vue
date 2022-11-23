<script>

import {store} from '../data/store.js'



import MovieCard from './MovieCard.vue'

export default {
    name: 'AppMain',
    props:{
        title: String,
        type: String
    },
    data(){
        return{
            store
        }
        
    },
    components:{
        MovieCard,
    }
}

</script>

<template>

  <h1>
    {{title}}
  </h1>
  <div class="container d-flex flex-wrap">

    <MovieCard :card="card" v-for="card in store[type]" :key="card.id"/>
    
  </div>
  
  
</template>



<style lang="scss" scoped>
    h1, {
        color: white;
    }
</style>