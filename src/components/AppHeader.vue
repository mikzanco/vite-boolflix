<script>

import {store} from '../data/store';

export default {
    name: 'AppHeader',
    data(){
        store
    }
}
</script>

<template>
  <header>
    <div class="container">
        <div class="logo p-3 align-items-center">
            <img src="/logo-boolflix.png" alt="Boolfix">
        </div>
        <div class="input p-3 align-items-center">
            <input 
            @keyup.enter="$emit('search')" 
            type="text" 
            v-model="store.apiParams.query"
            placeholder="search"
            class="form-control">
            
        </div>
    </div>
  </header>
</template>



<style lang="scss" scoped>
   header{
    width: 100vw;
    height: 100px;
    .container{
        height: 100%;
        width: 95%;
        display: flex;
        justify-content: space-between;
            img{
                height: 80px;
                width: 200px;
                
            }
        }
    }
   
</style>