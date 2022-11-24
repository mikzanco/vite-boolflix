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
        Math.ceil(this.card.vote_average / 2)
        },
        // crato metodo per gestire le icone e traformato il en in gb per icona corretta; inseito icona it se it
        flags(){
            if(this.card.original_language === 'en') return "fi fi-gb";
            else if(this.card.original_language === 'it') return "fi fi-it";
            else return "fi fi-xx ";
        }
        
    }
}
</script>

<template>
  

    
    <div class="mz-card"  >
        <div class="imgcard">
            <img :src="getImg()" :alt="card.title || card.name">
        </div> 
        <div class="info" >
            <p><span>Titolo:</span> {{ card.title || card.name }}</p>
            <p><span>Titolo originale:</span> {{ card.original_title || card.original_name}}</p>
            <p><span>Lingua:</span> <span :class="flags()"></span></p>
            <div>
                <i 
                    v-for="(n, index) in 5"
                    :key="index"
                    class="fa-star"
                    :class="index < rating ? 'fa-solid' : 'fa-regular' ">
                </i>
            </div>
            <p class="overview"><span>Overview:</span> {{card.overview || 'testo mancante'}}</p>
        </div>
    </div>
   
</template>



<style lang="scss" scoped>
// dato grandezza img
@use '../style/partials/variables';
    .mz-card{
        cursor: pointer;
        position: relative;
        margin: 10px;
        // try add transition
        // &:hover{
        //     .imgcard{
        //         transform: scale(0.9);
        //     }
            
        // }
        p{
            color: red;
        }
        .imgcard{
            
            display: block;
        }


        .info{
            display: none;
            position: absolute;
            background-color: black;
            width: 100%;
            height: 100%;
            padding: 50px;
            top: 0;
            left: 0;
            span{
                color: white;
            }
            .overview{
                height: 150px;
                font-size: 0.85rem;
                overflow-y: scroll;
            }
        }
    }
    img{
        
        width: 300px;
        height: 500px;
        padding: 10px;
        

    }
    .mz-card:hover .info{
        display: block;
    }
</style>