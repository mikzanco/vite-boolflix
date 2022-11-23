<script>

import { store } from '../data/store';

import StarRating from "vue-star-rating"

// installato falg-icons da npm e importato qui, adesso importato in general per averlo li


export default {
    name: 'MovieCard',
    props:{
        card: Object
    },
    components: {
        StarRating
    },
    data(){
        return{
            store
        }
    },
    methods: {
        getImg() {
            if (this.card.poster_path == null) {
                return "https://www.hovistocose.it/img/nocover.jpg";
            }
            return "https://image.tmdb.org/t/p/original" + this.card.poster_path;
        },
        rating(){
            return this.card.vote_average / 2;
        },
        // crato metodo per gestire le icone e traformato il en in gb per icona corretta; inseito icona it se it
        flags(){
            if(this.card.original_language === 'en') return "fi fi-gb";
            else if(this.card.original_language === 'it') return "fi fi-it";
            else return "fi fi-xx";
        }
        
    }
}
</script>

<template>
  

    
    <div class="mz-card"  >
        <div class="imgcard">
            <img :src="getImg()" >
        </div> 
        <div class="info" >
            <p>Titolo: {{ card.title || card.name }}</p>
            <p>Titolo originale: {{ card.original_title || card.original_name}}</p>
            <p>Lingua: <span :class="flags()"></span></p>
            <!-- <div class="rating-stars d-flex">
                <p>Voto medio:</p>
                <star-rating
                    :star-size="15"
                    :rating="rating()"
                    :read-only="true"
                    :active-color="yellow"
                    :show-rating="false"
                    :glow="2"
                    inactive-color="white"
                    >
                </star-rating>
            </div> -->
            <p class="overview">Overview: {{card.overview || 'testo mancante'}}</p>
        </div>
    </div>
   
</template>

<!-- {{card.vote_average}} -->

<style lang="scss" scoped>
// dato grandezza img
    
    .mz-card{
        cursor: pointer;
        position: relative;
        margin: 10px;
        
        p{
            color: white;
        }
        .imgcard{
            display: block;
        }


        .info{
            // display: none;
            position: absolute;
            background-color: black;
            width: 100%;
            height: 100%;
            padding: 50px;
            top: 0;
            left: 0;
            
            .overview{
                height: 250px;
                overflow-y: scroll;
            }
        }
    }
    img{
        width: 300px;
        height: 500px;
        padding: 10px;

    }
    // .mz-card:hover .imgcard{
    //     display: none;
    // }
    // .mz-card:hover .info{
    //     display: block;
    // }
</style>