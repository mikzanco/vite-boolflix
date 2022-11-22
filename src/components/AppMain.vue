<script>

import {store} from '../data/store.js'

export default {
    name: 'AppMain',
    props:{
        title: String
    },
    data(){
        return{
            store
        }
        
    }
}

</script>

<template>

  <h1>
    {{title}}
  </h1>
</template>



<style lang="scss" scoped>
    h1{
        color: white;
    }
</style>