<script>

  import axios from 'axios'
  import {store} from './data/store.js'

  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import AppSearch from './components/AppSearch.vue'
  import AppCardList from './components/AppCardList.vue'
  

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
    AppCardList
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
    // startSearch(){
      
    // }
  },
  mounted(){
    this.getApi('movie')
    this.getApi('tv')
  }
}
</script>

<template>
  
  <div>
    <AppHeader/>
    <AppMain title="film" type="movie"/>
    <AppMain title="Serie Tv" type="tv"/>
  </div>
  
</template>



<style lang="scss">
  @use './style/general.scss';
</style>