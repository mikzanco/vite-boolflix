<script>

  import axios from 'axios'
  import {store} from './data/store'

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
  }
}
</script>

<template>
  <AppHeader/>
  <main>

  </main>
  
</template>



<style lang="scss">
  @use './style/general.scss';
</style>