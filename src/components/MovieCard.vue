<script>

import { store } from '../data/store';

// installato falg-icons da npm e importato qui, adesso importato in general per averlo li


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
        // crato metodo per gestire le icone e traformato il en in gb per icona corretta; inseito icona it se it
        flags(){
            if(this.card.original_language === 'en') return "fi fi-gb";
            else if(this.card.original_language === 'it') return "fi fi-it";
        }
        
    }
}
</script>

<template>
  

    <!-- inserito lìimmagine con getImg nei methos e riporatat qui, aggiungere poi img vuota se non presente nella lista -->
    <div class="mz-card">
        <div>
            <img :src="getImg()" >
        </div> 
        <div>
            <p>Titolo: {{ card.title || card.name }}</p>
            <p>Titolo originale: {{ card.original_title || card.original_name}}</p>
            <p>Lingua: <span :class="flags()"></span></p>
            <p>Voto medio: {{card.vote_average}}</p>
        </div>
    </div>
   
</template>



<style lang="scss" scoped>
// dato grandezza img
    img{
        width: 300px;
        height: 600px;
    }
</style>