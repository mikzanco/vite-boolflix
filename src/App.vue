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
    getApi(type, isPopular = false){
      let apiUrl;
      if(isPopular) apiUrl = 'https://api.themoviedb.org/3/movie/popular'
      else apiUrl = store.apiUrl + type
      axios.get(apiUrl, {
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
      store.movie = [];
      store.tv = []
      if(store.type == ''){
        this.getApi('movie');
        this.getApi('tv');
      }else{
        this.getApi(store.type);
      }
      
    }
  },
  mounted(){
    this.getApi('movie', true);
  }
}
</script>

<template>
  
  <div>
    <AppHeader @search="startSearch"/>
    <AppMain v-if="store.movie.length > 0" title="Film" type="movie"/>
    <AppMain v-if="store.tv.length > 0" title="Serie Tv" type="tv"/>
  </div>
  
</template>



<style lang="scss">
  @use './style/general.scss';
</style>