<script>

import {store} from '../data/store.js';

export default {
    name: 'AppHeader',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <header>
    <div class="container">
        <div class="logo p-3 align-items-center ">
            <img src="/logo-boolflix.png" alt="Boolfix">
        </div>
        <div class="input-group align-items-center ">
            <input 
            @keyup.enter="$emit('startSearch')"
            v-model.trim="store.apiParams.query"
            type="text" 
            
            class="form-control" 
            aria-label="Text input with dropdown button">
            <button @click="$emit('startSearch')" class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select</button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
            
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