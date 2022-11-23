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

    <div class="title">
        <h1>
            {{title}}
        </h1>
    </div>
  
  <div class="container d-flex flex-wrap">

    <MovieCard :card="card" v-for="card in store[type]" :key="card.id"/>
    
  </div>
  
  
</template>



<style lang="scss" scoped>
    .title{
        display: flex;
        justify-content: center;
        margin: 100px 0;
        h1{
            color: white;
            
        }
    }
    
</style>