<script>

import { store } from '../data/store'

export default {
    name: 'MovieCard',
    props:{
        card: Object
    },
    data(){
        return{
            store
        }
    },
    methods: {
        getImg() {
            if (this.card.poster_path == null) {
                return "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg";
            }
            return "https://image.tmdb.org/t/p/original/" + this.card.poster_path;
        },
        flags(){
            if(this.card.original_language === 'en') return "fi fi-gb";
        }
        
    }
}
</script>

<template>
  <!-- <div>--{{ card.title || card.name }}, {{ card.original_title || card.original_name}}, {{card.original_language}} , {{card.vote_average}}--</div> -->

  <div>
    <img :src="getImg()" >
  </div>
</template>



<style lang="scss" scoped>
    img{
        width: 300px;
        height: 600px;
    }
</style>