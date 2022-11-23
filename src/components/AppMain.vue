<script>

import {store} from '../data/store.js'

import AppCardList from './AppCardList.vue'

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
        AppCardList,
    }
}

</script>

<template>

  <h1>
    {{title}}
  </h1>
  <div class="container d-flex flex-wrap">
    <ul>
    <li v-for="card in store[type]" :key="card.id">card</li>
  </ul>
  </div>
  
  <AppCardList/>
</template>



<style lang="scss" scoped>
    h1, li{
        color: white;
    }
</style>