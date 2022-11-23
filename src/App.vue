<script>

  import axios from 'axios'
  import {store} from './data/store.js'

  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import AppSearch from './components/AppSearch.vue'
  
  

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components:{
    AppHeader,
    AppMain,
    AppSearch,
    
  },
  methods:{
    getApi(type){
      axios.get(store.apiUrl + type, {
        params: 
        store.apiParams
        })
      .then(res =>{
        store[type] = res.data.results;
        
      })
      .catch(err => {
        console.log(err);
      })
    },
    startSearch(){

      this.getApi('movie');
      this.getApi('tv');
    }
  },
  mounted(){
    this.startSearch();
  }
}
</script>

<template>
  
  <div>
    <AppHeader @search="startSearch"/>
    <AppMain v-if="store.movie.length > 0" title="film" type="movie"/>
    <AppMain v-if="store.tv.length > 0" title="Serie Tv" type="tv"/>
  </div>
  
</template>



<style lang="scss">
  @use './style/general.scss';
</style>