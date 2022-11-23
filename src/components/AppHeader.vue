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
        <div class="input-group align-items-center col.auto ">
            <input 
            @keyup.enter="$emit('search')"
            v-model.trim="store.apiParams.query"
            type="text" 
            class="form-control" 
            placeholder="Cerca una serie o un film">
            <div class="col-2 m-2 align-items-center">
                <select v-model="store.categoryToSearch" class="form-select" placeholder="All">
                    <option value="" selected>All</option>
                    <option value="film">Film</option>
                    <option value="tv">SerieTv</option>
                </select>
            </div>
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